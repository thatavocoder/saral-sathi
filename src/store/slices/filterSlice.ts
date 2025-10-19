import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { TimeRange } from '@/types/filters'

type FilterState = {
  timeRange: TimeRange
}

const initialState: FilterState = {
  timeRange: TimeRange.AllTime,
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTimeRange: (state, action: PayloadAction<TimeRange>) => {
      state.timeRange = action.payload
    },
  },
})

export const { setTimeRange } = filterSlice.actions
export default filterSlice.reducer
