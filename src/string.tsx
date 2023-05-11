import React, {useState} from 'react'


function StringType() {

const [details, setdetails] = useState("Aniket")
  function updateDetails() 
  {
    setdetails("chachane")  
  }
  
  return (
    <div className="App1">
     {details}
     <br/> 
     <button onClick={updateDetails}>
      Tap to change name
     </button>

    </div>
  )
  }

  export default StringType;