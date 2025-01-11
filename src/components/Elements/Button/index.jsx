import React from "react";

const Button = (props) => {
  const { children, 
    classname = "bg-blue-600", 
    width = "w-full", 
    onClick = () => {},
    type = "button" 
  } = props;
  
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${width} ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;