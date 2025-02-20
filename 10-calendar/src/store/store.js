import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";
import { calendarSlice } from "../calendar/calendarslice";
import { authSlice } from "./auth/authSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});