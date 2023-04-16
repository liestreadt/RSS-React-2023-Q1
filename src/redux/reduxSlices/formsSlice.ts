import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormInput } from '../../helpers/types';

const formsInitialState: FormInput[] = [];

const formsSlice = createSlice({
  name: 'formsSlice',
  initialState: {
    submittedForms: formsInitialState,
  },
  reducers: {
    addSubmittedForm(state, action: PayloadAction<FormInput[]>) {
      state.submittedForms = action.payload;
    },
  },
});

export const { addSubmittedForm } = formsSlice.actions;
export default formsSlice.reducer;
