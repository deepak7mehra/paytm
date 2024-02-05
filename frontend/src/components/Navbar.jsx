import Icon from "./Icon";
import SearchBar from "./SearchBar";
import User from "./User";

export default function Navbar({user,amount}) {

  function onchange(e){
    console.log(e.target.value);

  }


  return (

    <div>

    <div className="min-h-20 border-b-2 flex justify-between p-6 ">
            <div>
                <h1 className="text-xl md:text-4xl font-semibold">Payment App</h1>
                
            </div>
            <div className="flex gap-5 md:text-lg  font-semibold items-center">
                Hello, {user?.user?.firstName}
                <div>
                  <Icon initial={user?.user?.firstName[0]}/>
                </div>
            </div>
        
    </div>

    <div className="mt-10 max-w-[90%]  mx-auto">
        <h1 className="text-xl md:text-3xl font-semibold">Your balance  <span className="ml-10">₹{amount}</span></h1>

        <h1 className="text-2xl mt-16 font-semibold">Users</h1>
        
        <div className="mt-10">
        <SearchBar placeholder={"Enter User..."} onchange={onchange}/>
        </div>
        <div className="mt-3">

        <User/>
        </div>
        
    </div>

    </div>

    
  )
}
