// components/ReusableInput.jsx
import React, { useRef } from "react";

const InputComp = ({
  value,
  placeholder,
  onChange,
  classes,
  name,
  type,
}: any) => {



  return (
    <div
      className={
        "flex items-center border-[1px] rounded p-1  " +
        (classes?.div || "")
      }
    >
      <input

        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={
          "bg-transparent border-none focus:outline-none text-black placeholder-black w-full p-1 sm:p-2 text-xs sm:text-sm" +
          (classes?.input || "")
        }
      />
    </div>
  );
};

export default InputComp;
