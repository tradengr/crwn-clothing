import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { httpGetUser, httpSubmitSignIn } from '../../api/serverAPI';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSignIn = createAsyncThunk(
  'user/userSignIn',
  async (user) => {
    return await httpSubmitSignIn(user);
  }
)

export const setCurrentUser = createAsyncThunk(
  'user/setCurrentUser',
  async () => {
    const res = await httpGetUser();
    const user = res.data;
    return user;
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    // const {pending, fulfilled, rejected} = setCurrentUser;
    builder
      .addCase(setCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(setCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        if (action.payload === undefined) alert('Invalid Username or Password')
        else if (action.payload.status === 200) window.location.assign('http://localhost:5173/')
      })
  }
});

export const userReducer = userSlice.reducer;







// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import { httpGetUser, httpSubmitSignIn } from '../../api/serverAPI';

// const initialState = {
//   currentUser: null,
//   isLoading: false,
//   error: null,
// };

// // export const userSignIn = createAsyncThunk(
// //   'user/userSignIn',
// //   async (user) => {
// //     const res = await httpSubmitSignIn(user);
// //     const 
// //   }
// // )

// export const setCurrentUser = createAsyncThunk(
//   'user/setCurrentUser',
//   async () => {
//     const res = await httpGetUser();
//     const user = res.data;
//     return user;
//   }
// )

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   extraReducers: (builder) => {
//     const {pending, fulfilled, rejected} = setCurrentUser;
//     builder
//       .addCase(pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.currentUser = action.payload;
//       })
//       .addCase(rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//   }
// });

// export const userReducer = userSlice.reducer;