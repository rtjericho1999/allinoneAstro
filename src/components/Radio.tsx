import { useEffect, useState } from "react";

const Radio = ({
  name,
  values,
}: {
  name: string;
  values: Array<{ value: string }>;
}) => {
  const [isChecked, setIsChecked] = useState("");
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  if (!name || !values) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex flex-col">
      {values.map((val, index) => (
        <div
          key={index}
          style={{ width: `${val.value.length * 2}ch` }}
          className={`relative flex justify-evenly items-center border border-[#111111] p-2 rounded-full transition-all duration-[.1s] ease-[ease-in-out]
        ${isChecked === val.value ? "bg-[#77ff77]" : "bg-transparent"}
        ${isChecked !== val.value && "hover:bg-[#bbffbb] active:scale-90"} 
        `}
        >
          <input
            type="radio"
            id="html"
            name={name}
            value={val.value}
            className="absolute w-full h-full top-0 opacity-0"
            onChange={(e) => e.target.checked && setIsChecked(val.value)}
          />
          <div
            className={`w-[16px] border border-[#111111] -rotate-45 transition-all duration-[.1s] ease-[ease-in-out]
          ${
            isChecked === val.value
              ? "h-[16px] rounded-full"
              : "h-[1px] rounded-0"
          }
          `}
          ></div>
          <label htmlFor="html">{val.value}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
