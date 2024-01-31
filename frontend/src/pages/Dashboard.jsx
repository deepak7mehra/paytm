import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import findUser from '../../helper/getUser.js';
import getAmount from '../../helper/getAmount.js';
export default function Dashboard() {

  const [userData,setUserData] = useState({});
  const [amount,setAmount] = useState(0);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const user = findUser(token);
    user.then((data)=>setUserData(data))

  },[]);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const amount = getAmount(token);
    amount.then((data)=>setAmount(data.amount))
  },[]);


  return (
    <div className='bg-[#ffff]'>
      <Navbar user={userData} amount={amount}/>
  
    </div>
  )
}
