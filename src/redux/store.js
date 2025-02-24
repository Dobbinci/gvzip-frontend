import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  userInfo: null,
};

const initialFilterState = {
  filters: []
};

let userInfo = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    storeUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
    },
  }
});

let filters = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    addFilters: (state, action) => {
      state.filters.push(action.payload);
      localStorage.setItem('filters', JSON.stringify(state.filters));
    },
    deleteFilters: (state, action) => {
      state.filters = state.filters.filter(filter => filter !== action.payload);
      localStorage.setItem('filters', JSON.stringify(state.filters));
    },
    clearFilters: (state) => {
      state.filters = [];
      localStorage.setItem('filters', JSON.stringify(state.filters));
    },
    fetchFilters: (state) => {
      const storedFilters = JSON.parse(localStorage.getItem('filters')) || [];
      state.filters = storedFilters;
    }
  }
});

let alumniType = createSlice({
  name: 'alumniType',
  initialState: 0,
  reducers: {
    setAlumniType: (state, action) => action.payload,
  },
});


export let { storeUserInfo, clearUserInfo } = userInfo.actions;
export let { addFilters, deleteFilters, clearFilters, fetchFilters } = filters.actions;
export let { setAlumniType } = alumniType.actions;

export default configureStore({
  reducer: {
    user: userInfo.reducer,
    filter: filters.reducer,
    alumniType: alumniType.reducer,
  }
});