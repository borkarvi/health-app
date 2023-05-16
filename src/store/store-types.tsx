

export type stateValue = {value: number , name: string}
export type stateType= {
    id: number ,
    name: string,
    BP: stateValue,
    HR: stateValue,
    SBP:stateValue,
    DBP:stateValue,
    PR: stateValue,
    SR:stateValue,
};

export type actionType = {
    payload: {value: number},
    type: string
}
    

export const UPDATE_BP = 'UPDATE_BP';
export const UPDATE_HR = 'UPDATE_BP';
export const UPDATE_SBP = 'UPDATE_BP';
export const UPDATE_DBP = 'UPDATE_BP';
export const UPDATE_PR = 'UPDATE_BP';
export const UPDATE_SR = 'UPDATE_BP';
export const VIEW = 'View';
export const EDIT = 'EDIT' ;
export const TABLE = 'Table';

export type VIEW_MODE = 'View' | 'EDIT'| 'Table'