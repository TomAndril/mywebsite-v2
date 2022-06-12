import { createSlice, PayloadAction } from "@reduxjs/toolkit"

enum FormKeys {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
}

type State = {
  currentStep: number
  formData: {
    [key in FormKeys]: string
  }
}

const initialState: State = {
  currentStep: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
  },
}

export const rebuilderSlice = createSlice({
  initialState,
  name: "Rebuilder",
  reducers: {
    updateKey: (
      state,
      action: PayloadAction<{ key: FormKeys; value: string }>
    ) => {
      state.formData[action.payload.key] = action.payload.value
    },
  },
})

export const { updateKey } = rebuilderSlice.actions

export default rebuilderSlice.reducer
