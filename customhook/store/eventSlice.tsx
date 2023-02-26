// import { createSlice } from '@reduxjs/toolkit';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../../config/firebase';

// const initialState = {
//   events: [],
//   isLoading: false,
//   error: null,
// };

// export const eventsSlice = createSlice({
//   name: 'events',
//   initialState,
//   reducers: {
//     addEventStart: (state) => {
//       state.isLoading = true;
//     },
//     addEventSuccess: (state, action) => {
//       state.events.push(action.payload);
//       state.isLoading = false;
//     },
//     addEventFailure: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { addEventStart, addEventSuccess, addEventFailure } = eventsSlice.actions;

// export const addEvent = (eventData) => async (dispatch) => {
//   try {
//     dispatch(addEventStart());
//     const docRef = await addDoc(collection(db, 'events'), eventData);
//     dispatch(addEventSuccess({ ...eventData, id: docRef.id }));
//   } catch (error) {
//     dispatch(addEventFailure(error.message));
//   }
// };
