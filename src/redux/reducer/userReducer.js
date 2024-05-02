import { NAME,EMAIL } from "../action/actionTypes";

const initailVal={
    name:'',
    email:''
}
const userReducer=(state=initailVal,action)=>{
    switch(action.type){
        case NAME:return{...state,name:action.value}
        case EMAIL:return{...state,email:action.value}
        default: return state
    }
}
export default userReducer; 