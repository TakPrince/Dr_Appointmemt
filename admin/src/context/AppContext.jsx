import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const value = {
        // Add any shared state or functions here
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
