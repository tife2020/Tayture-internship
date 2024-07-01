import React, {forwardRef } from "react";

const FormInput = forwardRef(function ({ label, placeholder, type, Input, ...props },ref) {

  return (
    <label className="text-black uppercase font-semibold">
      {label}
      <Input
        {...props}
        type={type}
        placeholder={placeholder}
        className="bg-neutral-200 text-neutral-800 font-normal w-full rounded-lg px-5 py-4 mt-3"
        ref={ref}
      />
    </label>
  );
})

export default FormInput;
