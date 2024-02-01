import { useEffect, useState } from "react";
import Icon from "./Icon";


export default function User() {

  const [allUsers,setAllUsers] = useState([]);

  useEffect(()=>{
    async function getAllUser(){
      const response = await fetch("http://localhost:3000/api/v1/user/bulk");
      const data = await response.json();
      return data
    }
    getAllUser().then(({users})=>setAllUsers(users))
  },[])



  return(

    <>
      {
        allUsers.map((user)=>{
          return(
            <div className="m-4">
              <UserBar firstName={user.firstName}/>

            </div>
          )
        
      
      })
      }

      
    </>

  
  )
}

function UserBar({firstName}){
  return(
    <>
    <div className="flex justify-between">
      <div className="flex gap-5 items-center">
        <Icon initial={firstName[0]}/>
        <div className="text-xl font-bold">{firstName}</div>
      </div>
      <div>
        <button className="bg-gray-500 rounded-md text-md p-2">Send Money</button>
      </div>
    </div>
    </>
  )

}
