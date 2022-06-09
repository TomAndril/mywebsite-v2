import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
  currentStep: number
}

const initialState: State = {
  currentStep: 1,
}

export const rebuilderSlice = createSlice({
  initialState,
  name: "Rebuilder",
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    },
  },
})

export const { setCurrentStep } = rebuilderSlice.actions

export default rebuilderSlice.reducer
