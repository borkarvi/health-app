import { createContext , useReducer, useState} from "react";
import styless from './HealthData.module.scss';
import reducerFunction, { initalstate, initalstateValue } from "../store/reducer-store";
import { TABLE, VIEW_MODE, stateType } from "../store/store-types";


const HealthDataContext = createContext({
    users: initalstate,
    currentPageState: TABLE,
    userData: initalstate[0],
    changeView: (value: VIEW_MODE) => {},
     changeUserData: (userData: stateType, changeState: boolean) => {}
})
 

export const HealthDataContextWrapper:React.FC<any> = (props) => {

    const [userState, dispatch] =  useReducer(reducerFunction , initalstateValue)
    const  [currentPageState , setCurrentPageState] = useState<VIEW_MODE>(TABLE)
   const [userData , setuserData ] = useState<stateType>(initalstate[0]);

   const changeUserData = (userData: stateType, changeState = false) => {
      setuserData(userData)
      if(changeState){ 
      const action = {
        type: 'UPDATE_USER_DATA',
        userData
    }
     dispatch(action)
      }
   }
    const changeView = (value:VIEW_MODE ) => {
        console.log("ChangeView" , value)
        setCurrentPageState(value)
    }
    const {children} = props
    return(
        <HealthDataContext.Provider value={
           {
            users:userState,
            currentPageState: currentPageState,
            changeView: changeView,
            userData: userData,
            changeUserData: changeUserData
           }
        }>   
        <div className={styless['container-main']}>
           {children}
         </div>
         </HealthDataContext.Provider>
    )
}


export default HealthDataContext;


