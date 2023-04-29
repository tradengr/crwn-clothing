import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { 
  httpGetUser, 
  httpSubmitSignIn, 
  httpSubmitSignUp,
  httpSignOutUser, 
} from '../../api/serverAPI';

type CurentUser = {
  displayName: string;
  email: string;
}

type UserState = {
  currentUser: CurentUser | null;
  isLoading: boolean;
  error: Error | null | unknown;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async () => {
    const res = await httpGetUser();
    const user = res.data;
    return user;
  }
)

export const userEmailSignIn = createAsyncThunk(
  'user/userEmailSignIn',
  async (user) => {
    return await httpSubmitSignIn(user);
  }
)

export const userGoogleSignIn = createAsyncThunk(
  'user/userGoogleSignIn',
  () => window.open('http://localhost:3000/auth/google', '_self')
)

export const userSignUp = createAsyncThunk(
  'user/userSignUp',
  async (user) => {
    return await httpSubmitSignUp(user);
  }
)

export const userSignOut = createAsyncThunk(
  'user/userSignOut',
  async () => {
    return await httpSignOutUser()
  }
)
  
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<CurentUser>) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userEmailSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userEmailSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload === undefined) alert('Invalid Username or Password')
        else if (action.payload.status === 200) window.location.assign('http://localhost:5173/')
      })
      .addCase(userEmailSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userGoogleSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userGoogleSignIn.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(userGoogleSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.status === 201) window.location.reload();
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(userSignOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userSignOut.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.status === 200) window.location.assign('http://localhost:5173/');      
      })
      .addCase(userSignOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const userReducer = userSlice.reducer;