import express from "express";
import {
  appointementCancel,
  appointementComplete,
  appointmentDoctor,
  doctorDashboard,
  doctorList,
  doctorLogin,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", doctorLogin);
doctorRouter.get("/appointments", authDoctor, appointmentDoctor);
doctorRouter.post(
  "/complete-appoiappointment",
  authDoctor,
  appointementComplete
);
doctorRouter.post("/cancel-appoiappointment", authDoctor, appointementCancel);

doctorRouter.get("/dashboard", authDoctor, doctorDashboard);

export default doctorRouter;
