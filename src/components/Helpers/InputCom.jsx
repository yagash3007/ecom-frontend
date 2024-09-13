export default function InputCom({
  label,
  type,
  name,
  placeholder,
  children,
  inputHandler,
  value,
  inputClasses,
  labelClasses = "text-qgray text-[13px] font-normal",
  readOnly = false,
}) {
  return (
    <div className="w-full h-full input-com">
      {label && (
        <label
          className={`input-label capitalize block mb-2 ${labelClasses || ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative w-full h-full overflow-hidden border input-wrapper border-qgray-border ">
        <input
          placeholder={placeholder}
          value={value}
          onChange={inputHandler}
          className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none ${
            inputClasses || ""
          }`}
          type={type}
          id={name}
          readOnly={readOnly}
          defaultValue={!inputHandler ? value : undefined} // Use defaultValue if inputHandler is not provided
        />
        {children && children}
      </div>
    </div>
  );
}
