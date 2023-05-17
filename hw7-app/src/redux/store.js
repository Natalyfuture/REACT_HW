import { configureStore } from "@reduxjs/toolkit";
import waitingOrdersReducer from './reducers/waitingOrdersSlice';
import activeItemMenuReducer from './reducers/activeItemMenuSlice';
import activeItemFilterReducer from './reducers/activeItemFilterSlice';
import sortedItemReducer from './reducers/sortedItemSlice' ;


export const store = configureStore({
    reducer: {
        waitingOrders: waitingOrdersReducer,
        activeItemMenu: activeItemMenuReducer,
        activeItemFilter: activeItemFilterReducer,
        sortedItem: sortedItemReducer,
    }
})


