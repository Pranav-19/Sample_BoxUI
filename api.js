// export const fetchUsers= async ()=>
// {
//     const response=await fetch('https://reqres.in/api/users?page=1')
//     const {data}= await response.json()
//     // console.log(data)
//     return data
// }

export const createUser = async (user)=>
{
    const response= await fetch('https://reqres.in/api/users',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
    })
    const result = await response.json()
    // console.log("result", result)
    return result 
}

export const editUser = async(prevId,newUser)=>
{
    const response= await fetch(`https://reqres.in/api/users/${prevId}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(newUser)
    })
    const result = await response.json()
   
    return result 
}
