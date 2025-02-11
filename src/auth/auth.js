// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
// export const selectUser =(state) => state.auth.user


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,  // 🔥 Add loading state
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false; // ✅ Set loading to false when logged in
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false; // ✅ Ensure loading is false on logout
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // 🔥 Control loading manually
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state) => state.auth.user;
export const selectAuthLoading = (state) => state.auth.loading;
