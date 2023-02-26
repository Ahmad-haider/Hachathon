import { useState } from 'react';


import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,db }from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore';

const AddEventForm = () => {

  const [title, setTitle] = useState('');
  const [id, setid] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [events, setevents] = useState([]);
  


  const addhandler = () => {

onAuthStateChanged (auth, async (user) => {
    
        try {


          
         
        
    
    
    
          const newDoc = {
            description,
            createdAt: new Date(),
            time,
            date,
            location,
           title
    
          }
    
    
          const docRef = await addDoc(collection(db, "events"), newDoc);
          console.log("Document written with ID: ", docRef.id);
    
          setevents([...events, { ...newDoc, id: docRef.id }])
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    
    
    
    
    
    
        const uid = user.uid;
        // ...
     
    });



  }
  

  return (

    <>

    <form onSubmit={addhandler}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />

      <label htmlFor="location">Location:</label>
      <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <textarea id="description"></textarea>

      <button onClick={addhandler}></button>
</form>


 {events.map((item:any, index:number) => {

          return (
            <>
            
<div >

             
                <p>{item.description}</p>
             
               
              </div>


            </>
          )




        })}




    </>
  )}

  export default AddEventForm


  