import React from "react";

function UserInput({ label,valid, ...props }) {

    let labelClasses = " block mb-2 text-sm font-bold tracking-widest uppercase "
    let inputClasses = 'w-full py-3 px-4   border-1  border-solid rounded-md shadow-sm '

    if (valid){
        labelClasses += ' text-[#f87171]'
        inputClasses += ' text-[#ef4444] border-[#f73f3f] bg-[#fed2d2]'
    }else{
        labelClasses += ' text-[#6b7280]'
        inputClasses += ' text-[#374151] border-transparent bg-[#d1d5db]'
    }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input
        {...props}
        className={inputClasses}
      />
    </p>
  );
}

export default UserInput;
