import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter", //*slice ın ismi
    initialState: { count: 0, theme:"dark"}, //*ilk state
    reducers: {
        increase: (state) => {
            state.count ++;
        },
        decrease: (state) => {
            state.count > 0 &&  state.count--;
        }, 

        //*payload ı olan reducer function:
        //*bu durumda ikinci parametre olarak action ı alır.
        reset: (state,action) => {
            state.count= action.payload;
        }
    }
});

export const {increase , decrease ,reset} = counterSlice.actions;

export default counterSlice.reducer;