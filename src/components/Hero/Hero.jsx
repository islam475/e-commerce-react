
import "./hero.css"
import { useState } from "react"
import { useEffect } from "react";
function Hero() {

  let [num,setNum]= useState(10.5);
  if (num>1){
    num
  }else{ num = " i will give you mony  "
    const h1 = document.getElementById('h')
     h1.classList.remove('hidden')
  }


//   const[username, setUsername] = useState('');
//   const handlesubmit =(e)=>{
//     e.preventDefault();
//     console.log({username})
//   }
  
    const handlerSubmit =(e)=>{
        e.preventDefault();
        console.log(name)
        console.log(password)
    }
    const[name,setName]=useState()
    const[password,setPassword]=useState()


    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json)
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error))

    

  return (
    <>
    {/* <form onSubmit={handlesubmit}>
        <label htmlFor="name">name</label>
        <input type="text" value={username} id="name" onChange={(e)=>{setUsername(e.target.value)}} /> 
        <button type="submit"> Login </button>
    </form> */}

        <form onSubmit={handlerSubmit} >
            <label htmlFor="name">User name</label> 
            <input type="text" value={name} id="name" onChange={(e)=>{setName(e.target.value)}}/><br />
            <label htmlFor="password">password</label>
            <input type="password" value={password} id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit" >login</button>
        </form>

    <div className="container">
        <p onClick={()=>{setNum(num-1);
        }}>Come and buy for  {num}  $</p>
          
        <img src="src\assets\media\images\banner_Hero2.jpg" alt="" />
         <div id="h" className="hidden">
         
         </div>


        <p>Take an idea and come tomorrow </p>
        






    </div>

    </>
  )
}

export default Hero