import { children } from "react";

const Label = (props) => {
    const {htmlFor, children} = props;
    return (
        <label 
        htmlFor={htmlFor}
        className="block text-slate-7000 text-sm font-bold mb-2"
      >
        {children}
      </label>
    );
};

export default Label
