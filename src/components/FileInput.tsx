interface FileInputProps {
  error?: string
  multiple?: boolean
  label?: string
}
const FileInput: React.FC<FileInputProps> = ({ error, multiple = false, label }) => {
  return (
    <div className="flex flex-col">
      <p className="text-black mb-2">{label}</p>
      <label className="block cursor-pointer border-2 p-2 border-gray-200  border-dotted rounded-lg">
        <span className="sr-only">Choose profile photo</span>
        <input type="file" multiple={multiple}
          className="cursor-pointer block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-gold-primary file:text-white
        hover:file:bg-gold-dark
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:text-neutral-500
        dark:file:bg-blue-500
        dark:hover:file:bg-blue-400
      "/>
      </label>
      <div className="w-full ">
        <p className="text-red-500 h-[15px] text-xs pl-1 pt-[2px]">
          {error}
        </p>
      </div>
    </div>

  )
}
export default FileInput