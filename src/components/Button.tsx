import { useState } from "react";

const Button = ({ name }: { name: string }) => {
  const [enterLeave, setEnterLeave] = useState(false);
  return (
    <button
      style={{ width: `${name.length * 2}ch` }}
      className="whitespace-nowrap text-center bg-transparent text-base p-2 border border-solid rounded-[25px] border-[#111111] text-[#111111] transition-all duration-[0.1s] ease-[ease-in-out] hover:scale-110 hover:bg-[#bbffbb] hover:border-[#77ff77] active:scale-90 active:bg-[#77ff77]"
    >
      {name}
    </button>
  );
};

export default Button;
