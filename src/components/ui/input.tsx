import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";


// import { useDebounce } from "@/lib/functions/debounce";


interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  notification?: string;
  direction?: "inline" | "column";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  width?: string;
  // onDebounce?: boolean;
  // deboounce?: number;

}

const Input = ({
  label,
  direction = "column",
  notification,
  iconLeft,
  iconRight,
  // onDebounce = false,
  // deboounce = 500,

  className,
  ...props
}: IInput) => {
  return (
    <div
    className={cn( 'w-auto h-10 gap-2 p-0 bg-white rounded overflow-hidden' , direction === "column" ?"flex flex-col" : "flex flex-row items-center justify-between gap-12" , className)}
    >
      {label ? (
        <div
          className={`w-full flex-row items-center justify-between p-0 ${
            direction === "column" ? "w-full" : "w-auto"
          }`}
        >
          {label && <label className="label">{label}</label>}
        </div>
      ) : (
        ""
      )}

      <div
        className={`w-full h-full h-10 border border-solid border-gray-300 overflow-hidden flex items-center justify-center p-0 max-w-none ${
          notification ? "border-solid border-1 border-erro500" : "border-solid border-1 border-gray300"
        }`}
      >
        {iconLeft && <div className="w-auto h-full flex items-center justify-center ml-2">{iconLeft}</div>}
        <input
          {...props}
          className={`w-full h-full border-none outline-none p-0 px-3 text-base text-gray-600 flex items-center ${
            notification ? "placeholder-erro500" : "placeholder-gray400"
          }`}
        />
        {iconRight && <div className="w-auto h-full flex items-center justify-center mr-2">{iconRight}</div>}
      </div>
      {notification && (
        <div className="notification text-erro500 text-12px">{notification}</div>
      )}
    </div>
  );
};

export default Input;
