import { createSlice} from '@reduxjs/toolkit';
 
const AnalyticsReducerInitialState = 
{
    //pageVisits Initial state
    pageVisits : [],    
}
 
export const AnalyticsReducerSlice =  createSlice({
    name: 'AnalyticsReducer',
    initialState: AnalyticsReducerInitialState,
    reducers :
    {
        //Add to pageVisits Reducer
        addTopageVisitsState : (state, action) =>
        {
            state.pageVisits.push(action.payload)
        },

        //Remove from pageVisits Reducer
        removeFrompageVisitsState : (state, action) =>
        {
            state.pageVisits = state.pageVisits.filter((item) => item !== action.payload);
        }
    }
});

//Export pageVisits current state
export const selectpageVisitsState  = (state) => state.AnalyticsReducer.pageVisits;

export const { addTopageVisitsState , removeFrompageVisitsState } = AnalyticsReducerSlice.actions;