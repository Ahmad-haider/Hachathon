import React from 'react'
import Navbar from '../components/header'
import Footer from '../components/footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





export default function signin() {
   return (
      <>

         <title>Sololearn</title>

        
<Navbar/>

         <main className='d-flex align-items-center justify-content-center   col-12' style={{ marginTop: '20vh', alignItems: 'center', }}>

            <div className=' mb-5 rounded-3 p-5 ' style={{ alignContent: 'center', background: '#F2F5F7', }}>

               <p className='fw-semibold fs-4 d-block pt-3' style={{ color: '#666666', textAlign: 'center', }}>Login</p>

               <div style={{}}>


                  <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '39vh', }}>
                      

                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: '39vh', }}>
                        <Form.Label style={{ color: '#666666' }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="" />
                        <a href="#" className="stretched-link " style={{}}>Forgot password</a> 
                     </Form.Group>

                   
  

                     <Button variant="" className='  px-4  text-light rounded-1 ' style={{ backgroundColor: '#2493DF', padding: '0.5vw', fontSize: '2vh', marginTop: '3vh', textAlign: 'center', width: '40vh   ', }} type='submit' >Login</Button>
                  </Form>

               </div>

            </div>

         </main>

         {/* <Footer/>  */}

      </>
   )
}
