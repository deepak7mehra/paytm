async function getAmount(token){

    const respose = await fetch('http://localhost:3000/api/v1/account/balance',{
        method:"GET",
        headers:{
                'Content-Type': 'application/json', // Specify the content type
                'Authorization': `Bearer ${token}`,
            }
    });
    return await respose.json();
    
}

export default getAmount
