import React, {useState} from 'react'


function StringType() {

const [details, setdetails] = useState("College Id")
const [name,setname ] = useState("Pallavi")

function updateDetails() 
  {
    setdetails("23445567789007764")  
  }
    return (
    <div className="App1">
     {details}
     <br/> 
     <button  onClick={updateDetails}>
      Click Here To check Id
     </button>
      <br></br>
    </div>
    )
  }

  export default StringType;