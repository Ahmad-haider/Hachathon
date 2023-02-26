import React,{useState} from 'react'
import { useRouter } from 'next/router';
import {auth, createUserWithEmailAndPassword }from '../config/firebase'

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






const signuphandler = async () => {

try{

  await createUserWithEmailAndPassword(auth , email , password);
   router.push("/")
}
catch(e){
}




  
 
  }

    
  return {

signuphandler,
email,
password,
pass,
mail,
setemail,
setpassword

 

  }
    
}


export default useSignup
