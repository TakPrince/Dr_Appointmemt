import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointementModel.js";
import userModel from "../models/userModel.js";
// API for adding doctor

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fee,
      address,
    } = req.body;
    const imgFile = req.file;

    // check for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !about ||
      !fee ||
      !address
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // validating email formate
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    // validaing string pass
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // hashing doc pass
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload img to cloudnary
    const imageUpload = await cloudinary.uploader.upload(imgFile.path, {
      resource_type: "image",
    });

    const imgUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      speciality,
      about,
      fee,
      address: JSON.parse(address),
      image: imgUrl,
      degree,
      experience,
      date: Date.now(),
    };
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    res.json({ success: true, message: "Doctor added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// api for admin login

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_Secret);
      res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credential" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Api to get all doctor list

const allDoctor = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// api to get all appointment
const appointmentAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// api for appointment cancel
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    // 1. Find and update the appointment
    const appointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { cancelled: true },
      { new: true }
    );

    // 2. Update doctor's slots_booked
    const { docId, slotDate, slotTime } = appointment;
    await doctorModel.findByIdAndUpdate(docId, {
      $pull: {
        [`slots_booked.${slotDate}`]: slotTime,
      },
    });

    res.json({
      success: true,
      message: "Appointment cancelled successfully",
    });
  } catch (error) {
    console.error("Cancellation error:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// api to get dashboard data from admin panel

const dashboardData = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const users = await userModel.find({});
    const appointments = await appointmentModel.find({});

    const dashData = {
      doctors: doctors.length,
      patients: users.length,
      appointments: appointments.length,
      latestAppointment: appointments.reverse().slice(0, 5),
    };
    res.json({
      success: true,
      dashData,
    });
  } catch (error) {
    console.error("Cancellation error:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export {
  addDoctor,
  loginAdmin,
  allDoctor,
  appointmentAdmin,
  appointmentCancel,
  dashboardData,
};
