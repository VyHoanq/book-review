
export default function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  className = "sm:col-span-2",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 leading-6 mb-2 dark:text-slate-50"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className="block w-full rounded-md border-0 py-3 dark:text-slate-100 text-gray-900 shadow-sm ring-1 ring-inset 
          dark:bg-transparent ring-green-500 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:ring-inset 
          dark:focus:ring-slate-500, sm:text-sm sm:leading-6 "
          defaultValue={""}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}