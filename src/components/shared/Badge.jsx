import React from "react";
import PropTypes from "prop-types";

function Badge({ children, color }) {
   return (
      <div
         className={`${color} text-sm font-semibold inline-flex items-center p-2 gap-2 rounded shadow-sm capitalize`}
      >
         {children}
      </div>
   );
}

Badge.defaultProps = {
   color: "bg-blue-100 text-blue-800",
};

Badge.propTypes = {
   children: PropTypes.node.isRequired,
   color: PropTypes.string,
};

export default Badge;
