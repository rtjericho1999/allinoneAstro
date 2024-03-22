import { useEffect, useRef, useState } from "react";

type InputAttr = {
  name: string;
  type: string;
};

const Input = ({ name, type }: InputAttr) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => console.log(`w-[${value.length}ch]`), [value]);
  return (
    <div className={`flex justify-center items-center relative`}>
      <p
        className={`whitespace-nowrap text-[#111111] bg-white px-1 absolute transition-all duration-[0.1s] ease-[ease-in-out] ${
          isFocused ? "translate-y-[-20px] scale-90 z-10" : "z-[-1]"
        }`}
      >
        {name}
      </p>
      <input
        type={type}
        style={{
          width: `${
            name.length * 2 > value.length ? name.length * 2 : value.length
          }ch`,
        }}
        className={`bg-transparent text-base p-2 border border-solid rounded-[12px] border-[#111111] text-[#111111] transition-transform duration-[0.1s] ease-[ease-in-out] ${
          isFocused && `scale-110`
        }`}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onFocus={() => !value && setIsFocused((e) => !e)}
        onBlur={() => !value && setIsFocused((e) => !e)}
      />
    </div>
  );
};

export default Input;
