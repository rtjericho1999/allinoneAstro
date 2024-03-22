import { useState } from "react";

const CheckBox = ({ name }: { name: string }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      style={{ width: `${name.length * 2}ch` }}
      className={`relative ch p-2 border border-[#111111] flex justify-evenly items-center transition-all duration-[.1s] ease-[ease-in-out] active:scale-90
      ${
        isChecked
          ? "hover:bg-[#bbffbb] active:bg-[#77ff77]"
          : "hover:bg-[#ffbbbb] active:bg-[#ff7777] "
      }
      `}
    >
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value="Bike"
        className="z-10 absolute w-full h-full top-0 left-0 opacity-0"
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <div className="relative h-[16px] w-[16px]">
        <div
          className={`absolute h-full w-[1px] border border-[#111111] rotate-45 transition-all duration-[.1s] ease-[ease-in-out] ${
            isChecked ? "right-[4px]" : "right-0"
          }
        `}
        ></div>
        <div
          className={`absolute  w-[1px] border border-[#111111] -rotate-45 transition-all duration-[.1s] ease-[ease-in-out]
        ${
          isChecked
            ? "h-[8px] left-[3px] bottom-[1px]"
            : "h-full right-0 bottom-0"
        }
        `}
        ></div>
      </div>
      <label htmlFor="vehicle1"> {name}</label>
    </div>
  );
};

export default CheckBox;
