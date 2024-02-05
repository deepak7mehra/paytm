
export default function SearchBar({placeholder,type="text",onchange}) {
  return (
    <div>

        <input onChange={onchange} type={type} placeholder={placeholder} className="border h-10 rounded-md w-full" />
      
    </div>
  )
}
