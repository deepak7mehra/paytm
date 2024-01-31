
export default function SearchBar({placeholder,type="text"}) {
  return (
    <div>

        <input type={type} placeholder={placeholder} className="border h-10 rounded-md w-full" />
      
    </div>
  )
}
