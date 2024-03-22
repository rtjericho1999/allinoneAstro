import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`w-[32px] h-[16px] border border-[#111111]
      transition-all duration-[.1s] ease-[ease-in-out]
      ${toggle ? "rounded-full" : "rounded-none"}
      `}
      onClick={() => setToggle((e) => !e)}
    >
      <div
        className={`h-full w-1/2 flex justify-center items-center relative
      transition-all duration-[.1s] ease-[ease-in-out]
      ${toggle ? "translate-x-full" : "translate-x-0"}
      `}
      >
        <div
          className={`absolute h-full w-px bg-[#111111] rotate-45
          transition-all duration-[.1s] ease-[ease-in-out]
        ${toggle ? "opacity-0" : "opacity-100"}
        `}
        ></div>
        <div
          className={`absolute h-full border border-[#111111] transition-all duration-[.1s] ease-[ease-in-out]
        ${toggle ? "w-4 rounded-full rotate-0" : "w-px rounded-none -rotate-45"}
        `}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
