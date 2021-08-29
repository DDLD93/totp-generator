import Card from 'react-bootstrap/Card'
import {app} from './Firebase'
import firebase from './Firebase'
import {useEffect, useState} from "react"
import { render } from '@testing-library/react'


export default function Settings (props) {
  const [note, setnote] = useState([])

 
  
 
    
   useEffect(() => {
   
    

     
   }, []) 
    return (
        <div style={{position: 'relative', zIndex: '1', paddingTop:'90px'}}>
                  <Note title ={note.title}
                  notes ={note.notes}
                  
                   />
        </div>
        )
}

function Note(props) {
   const [notes, setnotes] = useState({});

  function typing(e) {
    if(e.target.id === "input"){
    setnotes(prevnotes =>  ({...prevnotes,  title:e.target.value}))
    
  }else if(e.target.id === "textarea") {
    setnotes(prevnotes =>  ({...prevnotes,  body:e.target.value}))
}
console.log(notes)
}
window.addEventListener('click', () => {
 let txtarea =document.querySelectorAll('textarea')
 txtarea.forEach(e => {
   if(e.contentEditable) {
      e.contentEditable =false
      console.log(e.contentEditable)
   }
  
 })
 
})

   return (
    <div id="card">
      <textarea onChange={typing} contentEditable='false' onClick={(e) => e.target.contentEditable =true} className="text" id="input" >tilte</textarea>
      <textarea onChange={typing}  contentEditable='false' onClick={(e) => e.target.contentEditable =true} className="text" id="textarea" >text body</textarea>
    </div>
  )  
}
