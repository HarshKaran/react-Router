import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

     const data=useLoaderData();      //  By concept of loader 

    // const[data , setData] =useState([]);
    // useEffect(() => {
    //     fetch(` https://api.github.com/users/hiteshchoudhary`)
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (

    <div className='text-center m-4 bg-gray-300 text-black p-4 text-3xl'> Github Followers : {data.followers}
    <img src={data.avatar_url} alt='git_image' width={300} ></img>
    </div>
    
  )
}

export default Github


//          ****** Optimization by Loader ******  
export const githubInfoLoader = async () => {
    const response = await fetch(` https://api.github.com/users/hiteshchoudhary`)
    return response.json();
}