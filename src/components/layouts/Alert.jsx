import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
   const { alert } = useContext(AlertContext);

   let color = "";
   if (alert !== null) {
      switch (alert.type) {
         case "error":
            color = "text-red-700 bg-red-100";
            break;
         case "warning":
         default:
            color = "text-yellow-700 bg-yellow-100";
      }
   }

   return (
      alert !== null && (
         <div className={`p-4 mb-4 text-sm ${color} rounded-lg max-w-lg`}>
            {alert.msg}
         </div>
      )
   );
}

export default Alert;
