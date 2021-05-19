import React from 'react'
import { Button } from 'reactstrap'

const ModelPopup =(props) => { console.log(props);
  return (
    <div className='LoginRegister-popup'>
      <div className='LoginRegister-popup-inner'>
        <h1>{props.text}</h1>
        <h6>{props.ext}</h6>
        <Button color='primary' onClick={props.closePopup}>close me</Button>
      </div>
    </div>
  )
}


export default ModelPopup
