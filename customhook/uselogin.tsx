import React,{useState} from 'react'
import { useRouter } from 'next/router';
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }from '../config/firebase'

const useSignup = () => {



  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [router, setrouter] = useState(useRouter);



const pass  = (e:any) => {


setpassword(e.target.value)


}

const mail  = (e:any) => {


  setemail(e.target.value)
  
  
  }






 const loginhandler = () => {
       
       
         signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
           // ...
         })
         .catch((error) => {
         })
       




  
 
  }

    
  return {
loginhandler, 
email,
password,
pass,
mail,
setemail,
setpassword

 

  }
    
}


export default useSignup
