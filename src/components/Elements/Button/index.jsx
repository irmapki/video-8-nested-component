import React from "react";

const Button = (props) => {
  const { 
    children, 
    className = "", // Hapus default bg-blue-600
    onClick = () => {},
    type = "button" 
  } = props;
  
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md bg-blue-600 ${className} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;