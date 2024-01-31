import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";

export default function SigninCard() {
    const {register,handleSubmit,formState: { errors }} = useForm();
    const navigate = useNavigate();

    function handleClick(data){
        if(Object.keys(errors).length) return;

        async function sendData(data){
            const response = await fetch('http://localhost:3000/api/v1/user/signin',{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            if (response.ok){

                const responseJson = await response.json();
                const {token} = responseJson;
                localStorage.setItem("token",token);
                navigate('/dashboard')
            }else{
                console.log("an error occured")
            }
            
        }
        sendData(data);

        

       

    }

  return (
    <div className="bg-[#ffffff] min-h-[400px] max-w-[338px] rounded-md shadow-2xl">

        <div className=" p-5 text-center">
            <h1 className="text-3xl font-bold">SignIn</h1>
            <p className="pb-0 text-gray-500">Enter your credential to access your account</p>
        </div>


        <form onSubmit={handleSubmit(handleClick)}>

        <div className="flex flex-col gap-3 w-[80%]  mx-auto">
            <InputField name={"Email"} placeholder={"JohnDoe@gmail.com"} register={register}/>
            {errors.username?.type === "required" && (
            <p className="text-sm -mt-3 text-red-600" role="alert">username is required</p>)}
            <InputField name={"Password"} placeholder={""} pass={true} register={register}/>
            {errors.password?.type === "required" && (
            <p className="text-sm -mt-3 text-red-600" role="alert">password is required</p>)}
            <div>
                <button onClick={handleClick} className="w-full bg-[#18181b] h-8 rounded-lg text-[#f7f7f7]">SignUp</button>
                <div className="text-center">
                <p>Already have an account? <Link to={`/signin`}><span className="underline">Login?</span></Link></p>

                </div>
                
        </div>
        </div>
        </form>
    </div>
  )
}
