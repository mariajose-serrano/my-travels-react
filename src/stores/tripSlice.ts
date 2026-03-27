import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Trip } from '../types/Trip';

interface TripsState {
  list: Trip[];
}

const initialState: TripsState = {
  list: [],
};

const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTrip: (state, action: PayloadAction<Trip>) => {
      state.list.push(action.payload);
    },
    setTrips: (state, action: PayloadAction<Trip[]>) => {
      state.list = action.payload;
    }
  }
});

export const { addTrip, setTrips } = tripsSlice.actions;

export default tripsSlice.reducer;