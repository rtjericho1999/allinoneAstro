import { useEffect, useState } from "react";

const Slider = () => {
  const [width, setWidth] = useState("0");
  const [onComponent, setOnComponent] = useState(false);
  useEffect(() => console.log(width));
  return (
    <div
      className="relative w-[80px] p-2 flex justify-center items-center border border-[#999999] rounded-full"
      onMouseEnter={() => setOnComponent(true)}
      onMouseLeave={() => setOnComponent(false)}
    >
      <div className="absolute w-full p-2 h-[1px]">
        <div
          style={{ width: `${width}%` }}
          className="relative h-[1px] bg-[#111111]"
        >
          <div
            className={`absolute -top-2 h-[16px] border border-[#111111] transition-all duration-[.1s] ease-[ease-in-out] 
          ${
            onComponent
              ? "w-[16px] right-[-8px] rounded-full"
              : "w-[1px] right-0 rounded-none"
          }
          `}
          ></div>
        </div>
      </div>
      <input
        type="range"
        id="vol"
        name="vol"
        min="0"
        max="100"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        className="absolute w-full opacity-0"
      />
    </div>
  );
};

export default Slider;
