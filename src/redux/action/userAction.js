import { NAME,EMAIL } from "./actionTypes";

export const name=(value)=>{
    return{
        type:NAME,
        value
    }
}

export const email=(value='')=>{
    return{
        type:EMAIL,
        value
    }
}