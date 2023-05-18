import { useContext, useEffect, useState } from "react";
import { TABLE, stateType } from "../../store/store-types";
import HealthDataContext from "../../context/health-data-context";
import { useParams } from "react-router-dom";
import { initalState } from "../../store/reducer-store";

const EditHealthData = () => {

    const parms:any = useParams();
    console.table(parms);
   const { users , dispatchFun} = useContext(HealthDataContext);
   const [ userData, setUserData ] = useState<stateType>(initalState[0]);

         useEffect (() => {
            if(parms.userId){
                users.forEach(user=> {
                    if(user.id == parseInt(parms.userId)){
                        setUserData(user)
                    }
                })
            }
            console.log('users',users) 

         },[parms])

    const onNameChange = (e:any) => {
        console.log('e.name', e.target.value)
       const newUserData = {...userData, name: e.target.value};
       setUserData(newUserData)
       const action = {
        type: 'UPDATE_USER_DATA',
        userData: userData
       }
         dispatchFun(action)
    }

    const onChangeBP = (e:any) => {
       // console.log('e.name', e.target.value);
        const newBP = {...userData.BP, value: e.target.value};
        const newUserData = {...userData, BP: newBP};
       setUserData(newUserData)
       setUserData(newUserData)
       const action = {
        type: 'UPDATE_USER_DATA',
        userData: userData
       }
         dispatchFun(action)
    }

    return (
        <div>


<form>
    userId{parms.userId}

<p>ID :- {userData.id}</p>
<input type="text" 
value={userData.name} 
onChange={onNameChange} 
placeholder="name" />

<span>----------------------------</span>

<input 
    type="number" 
    value={userData.BP.value}
    onChange={onChangeBP}
    placeholder={userData.BP.name} />


</form>


        </div>
    )
};

export default EditHealthData;

