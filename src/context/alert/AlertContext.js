const { createContext, useState } = require("react");

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
   const [alert, setAlert] = useState("");

   const setAlertMsg = (text) => {
      setAlert(text);

      setTimeout(() => {
         setAlert("");
      }, 3000);
   };

   return (
      <AlertContext.Provider value={{ alert, setAlertMsg }}>
         {children}
      </AlertContext.Provider>
   );
};

export default AlertContext;
