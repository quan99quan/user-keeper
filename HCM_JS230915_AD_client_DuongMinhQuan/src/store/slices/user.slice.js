import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        data:null
    },
    reducers:{
        setData:(state, action) =>{
            state.data = action.payload
        },
        loadModal:(state) =>{
            state.addModal = !state.addModal
        },
        addData:(state,action) =>{
            state.data.push(action.payload)
        },
        deleteData(state, action) {
            const userId = action.payload;
            state.data = state.data.filter((user) => user.id !== userId);
          },
          setEditUser: (state, action) => {
            state.editUser = action.payload;
          },
          clearEditUser: (state) => {
            state.editUser = null;
          },
    }
})

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;