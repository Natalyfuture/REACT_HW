import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    waitingOrders: false,
}
const waitingOrdersSlice = createSlice({ 
    name: 'waitingOrders',
    initialState,
    reducers: {
        toggleWaitingOrders: (state) => !state.waitingOrders,
    },
})
export const { toggleWaitingOrders } = waitingOrdersSlice.actions;
export default waitingOrdersSlice.reducer

