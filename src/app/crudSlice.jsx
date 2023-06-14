import {createSlice} from '@reduxjs/toolkit'

const initialState={
    tasks:[]
}
const crudSlice = (createSlice({
name : 'crudSlice',
initialState,
reducers: {
    addTask :(state,action ) =>{

         /*
      ! gönderilen elemanın id değeri var mı onu kontrol ediyoruz
      ? çünkü eğerki ekleme yapıldıysa gönderilen elemanın id değeri yok
      ? düzenlenme yapıldıysa gönderilen elemanın id değeri var
      */

      //  ! objenin id değeri varsa çalışır: (düzenlenen todoyu değişmiş şekilde yerine koyar)

if(action.payload.id){
    const index =state.tasks.findIndex((i)=> i.id === action.payload.id)
       // bulduğumuz sıradaki elemanı çıkarıp
    //  yerine action'la beraber gelen objeyi ekleriz
    state.tasks[index]= action.payload
  return;
}

 // storeda tutulan  objelerin sayısını alma
 const maxId = state.tasks.length +1
 // bulduğumuz id değerini objeye ekleme
 action.payload.id =maxId
  state.tasks = [...state.tasks, action.payload]
    } ,
 removeTask : (state,action)=>{
     // silinecek elemanın sırasını bulma
        const index = state.tasks.findIndex((item)=> item.id === action.payload)
           //   diziden sırasını bildiği elmanı çıkarma 
        state.tasks.splice(index,1)
        
       }
}





}))

export const {addTask, removeTask} = crudSlice.actions
export default crudSlice.reducer 
