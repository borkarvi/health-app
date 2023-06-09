import { useContext, useEffect, useState } from "react";
import HealthDataContext from "../../context/health-data-context";
import { useParams } from "react-router-dom";
import { stateType } from "../../store/store-types";
import { initalState } from "../../store/reducer-store";

const ViewHealthData = () => {
    const { users } = useContext(HealthDataContext);

    const params: any= useParams();
    console.log('userData',users)
    const [ userData, setUserData ] = useState<stateType>(initalState[0]);

    useEffect(() => {
          if(params.userId){
              users.forEach(user=> {
                  if(user.id == parseInt(params.userId)){
                    setUserData(user)
                  }
              })
          }
          console.log('userData',userData)
    },[params])

    const [BPresult, setBPResult] = useState('');
    
    const checkBP = () => {
         if(userData.SBP.value < 120 && userData.DBP.value <80){
             setBPResult('NORMAL')
         }else if(
           (userData.HR.value > 120 && userData.SBP.value  <129 ) 
                     && userData.DBP.value <80){
             setBPResult('Elevated')
         }else if(
             (userData.SBP.value > 130 &&userData.SBP.value  <139 ) 
                     &&
             (userData.DBP.value > 80 && userData.DBP.value <89)){
            setBPResult('HIGH BP')
         }else if(
            (userData.SBP.value > 140 &&userData.SBP.value  <150 ) 
                    &&
            (userData.DBP.value > 90 && userData.DBP.value <98)){
           setBPResult('Low BP')
        }else if(
            (userData.SBP.value > 180 &&userData.SBP.value  <190 ) 
                    &&
            (userData.DBP.value > 120 && userData.DBP.value <130)){
           setBPResult('Very HIGH BP')
        }
        }
     useEffect(() => {
        checkBP()
    },[userData])
    return (
        <div>

         <p>Name: {userData.name}</p>

        <p>
            BP STATE : {userData.BP.value} / {BPresult}
        </p> 

        </div>
    )
};

export default ViewHealthData;