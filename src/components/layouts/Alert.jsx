import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
   const { alert } = useContext(AlertContext);
   if (alert !== "")
      return (
         <div
            className='p-4 mb-4 text-sm text-orange-700 bg-orange-100 rounded-lg max-w-lg'
            role='alert'
         >
            {alert}
         </div>
      );
   return <></>;
}

export default Alert;
