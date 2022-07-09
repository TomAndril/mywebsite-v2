import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

export enum FormKeys {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  image = "image",
  introduction = "introduction",
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
    image: "",
    introduction: "",
  },
}

export const rebuilderSlice = createSlice({
  initialState,
  name: "Rebuilder",
  reducers: {
    updateKey: (
      state,
      action: PayloadAction<{ key: keyof typeof FormKeys; value: string }>
    ) => {
      state.formData[action.payload.key] = action.payload.value
    },
    updateStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    },
  },
})

export const { updateKey, updateStep } = rebuilderSlice.actions
export default rebuilderSlice.reducer

export const rebuilderSelector = (state: RootState) => state.rebuilder
