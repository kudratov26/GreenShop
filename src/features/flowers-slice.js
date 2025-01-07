import { createSlice } from "@reduxjs/toolkit";

const flowerSlice = createSlice({
  name: "flowers",
  initialState: {
    totalPrice: 0,
    flowers: [],
  },
  reducers: {
    addFlower(state, action) {

      let { count, num, id } = action.payload
      console.log(action.payload);

      if (!count) {
        action.payload.count = num || 1;
        state.flowers.unshift(action.payload)
        console.log("1 bolim ");
      }
      else {
        const flower = state.flowers.find(item => item.id === id)
        flower.count += num ? num : count++;
      }
    },
    removeFlower(state, action) {

    }
  }
})

export const flowerActions = flowerSlice.actions
export default flowerSlice