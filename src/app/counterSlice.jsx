import { createSlice } from '@reduxjs/toolkit';

/* 
! hem reducerları
! hem action'ları
! hem actitonType'ları
farklı dosyalarda oluşturmak yerine slice dosyasında oluşturucaz

? > Slice Kurulum:
? > 1- createSlice methodunu import et
? > > içerisine bir obje tanımla:
? > > name : slice ismi 
? > > initialState : başlangıç state'i 
? > > reducers{} : aksiyonları ve store yapıcakları etkiyi tanımlıyacaz

*/

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    // TODO Burada birden reducer fonksiyonu oluşturabiliyoruz
    increase: (state, action) => {
      state.counter += 1;
    },
    decrease: (state, action) => {
      state.counter -= 1;
    },
    // payload değerine sahip
    setCount: (state, action) => {
      state.counter = action.payload;
    },
  },
});

// 2. Aşama : conterSlice objesi içerisindeki action'lar export etme
export const { increase, decrease, setCount } = counterSlice.actions;

// 3. Aşama : counterSlice objesi içerisinde reducer ' ı export et
export default counterSlice.reducer;

/*

>
> dispatch({
>    type:"INCRASE",
>    payload: +1
> })
> dispatch({
>    type:"DECRASE",
>    payload: -1
> })
>
>
>

*/