export default function InputField({name,placeholder,pass=null,register}){
    let inputName = name.replace(/ /g, '');
    inputName = inputName[0].toLowerCase()+inputName.slice(1);

    if (inputName=="email") inputName = "username";

    return(
        <label className="">
                <span className="font-semibold">{name}</span>
                <div className="mt-2">
                    <input name={inputName} type={pass?"password":"text"} placeholder={placeholder} {...register(`${inputName}`,{required:`${name} is required`})} className="border-2 h-8 rounded-md w-full" />

                </div>
                
        </label>

    )
    

}
