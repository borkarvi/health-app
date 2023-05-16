import { UPDATE_BP , UPDATE_DBP , UPDATE_HR , UPDATE_PR , UPDATE_SBP , UPDATE_SR , actionType , stateType }
 from "./store-types";

 export const initalstate: stateType[] = [
    {
    id:0,
    name: '',
    BP: { value: 0, name: 'Blood Pressure' },
    HR: { value: 0, name: 'Heart Rate' },
    SBP: { value: 0, name: 'Sistolic BP' },
    DBP: { value: 0, name: 'Distolic BP' },
    PR: { value: 0, name: 'Pulse Rate' },
    SR: { value: 0, name: ' Sugar' },
}
]
export const initalstateValue: stateType[] = [
    {
    id: 1,
    name: 'ARC',
    BP: { value: 12, name: 'Blood Pressure' },
    HR: { value: 514, name: 'Heart Rate' },
    SBP: { value: 119, name: 'Sistolic BP' },
    DBP: { value: 79, name: 'Distolic BP' },
    PR: { value:  66 ,name: 'Pulse Rate' },
    SR: { value: 35, name: ' Sugar' },
},
{
    id: 2,
    name: 'VIGO',
    BP: { value: 354, name: 'Blood Pressure' },
    HR: { value: 34, name: 'Heart Rate' },
    SBP: { value: 123, name: 'Sistolic BP' },
    DBP: { value: 123, name: 'Distolic BP' },
    PR: { value: 43, name: 'Pulse Rate' },
    SR: { value: 1234, name: ' Sugar' },
}


]


// obj[key] = 'new value'
const reducerFunction = (state = initalstate , action: any) => {
    switch (action.type){
        case 'SET_USERS_DATA':
        return{
            ...action.payload.users
        }
        case 'UPDATE_USER_DATA':
        console.log('state while update' , state );

        const userId: number = state.findIndex((user:stateType) => user.id === action.userData.id)
        state[userId] = action.userData;
         return [...state];
            
         
         default:
            return state;
    }

} 
export default reducerFunction;