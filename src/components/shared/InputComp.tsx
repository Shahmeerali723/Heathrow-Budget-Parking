// components/ReusableInput.jsx
import React, { useRef } from "react";

const InputComp = ({...props}) => {

  const {
    value,
    placeholder,
    onChange,
    classes,
    name,
    type,
    disabled,
  } = props


  return (
    <div
      className={
        "flex items-center border-[1px] border-gray-200 rounded p-1  " +
        (classes?.div || "")
      }
    >
      <input

        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        className={
          "bg-transparent border-none  focus:outline-none text-black placeholder-gray-500 w-full p-1 sm:p-2 text-xs sm:text-sm" +
          (classes?.input || "")
        }
      />
    </div>
  );
};

export default InputComp;
