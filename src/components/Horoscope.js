import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import Userdata from './Userdata';

function Horoscope() {   
  //creating user data 
    const[user,setUser] = useState({
        name : '',
        sign : '',
        day : '',
        email : ''
    });
    //reading values from api
    const [read, setRead] = useState('');

      //handling card 
    const [showData, setShowData] = useState(false);

    //read user data
    const[readUser,setReaduser] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("User Data");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    })

      //set value to local storage
    useEffect(()=>{
        localStorage.setItem('User Data',JSON.stringify(readUser))
      },[readUser]);

   // Handling Inputs
    const changeText = (e)=>{
        const{name,value}= e.target;
        setUser({...user,[name]:value})      
    }
    //getting datas from api
     const getRead = (e) => {
         e.preventDefault();
        axios.post(`https://aztro.sameerkumar.website/?sign=${user.sign}&day=${user.day}`)
        .then(response => {
            setRead(response.data);
            toast(`${user.name} horoscope is created.`)
            setShowData(true)  
            setReaduser(user)
               
          });          
        }    

      //reset datas
      const reset = ()=>{
        window.location.href = `/`
      }
        
      return ( 
        <div className='container'>
          <h2 className='text-center m-1 text-warning'>Horoscope App</h2>
              <div className='col-md m-3'>
                  <div className='card'>
                      <div className='card-body'>
                            <form action="" className='form-group' onSubmit={(e)=>{getRead(e)}}>

                                <label htmlFor="">Sign :</label>
                                <input type="text" name="sign"  placeholder=' eg : Leo,virgo' className='form-control' onChange={(e)=>{changeText(e)}} required/>

                                <label htmlFor=""> Name :</label>
                                <input type="text" name="name"  placeholder='Enter Your Name' className='form-control' onChange={(e)=>{changeText(e)}} required/>

                                <label htmlFor="">Enter Day : </label>
                                <input type="text"  name="day"  placeholder='eg: yesterday, today and tomorrow'  className='form-control' onChange={(e)=>{changeText(e)}} required/>

                                <label htmlFor="">E-mail : </label>
                                <input type="email" name="email"  placeholder='Enter Your Email address' className='form-control' onChange={(e)=>{changeText(e)}} autoComplete='off' required/>

                                <input type="submit" className='btn btn-outline-success mt-3'  value='Get Horoscope' />
                                <button  onClick={(e)=>{reset(e)}} className='btn btn-outline-danger mt-3 float-end'>Reset</button>
                            </form>
                      </div>
                  </div>       
              </div>
          
           <div className='col-md-8 offset-md-2 '>
           {showData ? <Userdata {...read} user={user} /> : null}
           </div>           
         
        </div>
      )
}

export default Horoscope;