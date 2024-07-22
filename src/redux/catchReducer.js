const initialState = []

export const catchReducer = (state = initialState, action) => {
  if (action.type === "CATCH_POKEMON") {
    if(state.includes(action.id)){
      return state.filter(el => el !== action.id)
    } else {
      return [...state, action.id]
    }
  }
  else if (action.type === "FREEDOM_FOR_POKEMON") {
    return initialState
  }
  else return state
}

