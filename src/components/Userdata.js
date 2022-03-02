import React from 'react';
import { Fieldset } from 'primereact/fieldset';


function Userdata(props) {   
 
  const getColor = (day)=>{
    if(day === 'today'){
      return 'lightgreen';
    }
    return 'white';
  } 
  return (    
      <Fieldset  legend={props.user.name}>
          <p><span><strong className='float-start'>Day : </strong >{props.current_date} </span></p>       
          <p style={{background : getColor(props.user.day),padding:'2px'}}><strong>Description : </strong><span >{props.description}</span></p>
          <p><span className='float-start'><strong>Date Range : </strong>{props.date_range}</span></p>
          <br />
          <p><span className='float-start'><strong>Sign : </strong>{props.user.sign}</span> <span className='float-end'><strong>Mood : </strong>{props.mood}</span></p><br />
      </Fieldset> 
  )
}

export default Userdata;