
// const initialState = 1
const initialState = {
  number: 1,
  size: 12
}
export const pageReducer = (state = initialState, action) => {
  if (action.type === "NEXT_PAGE") {
    return {...state, number: state.number + 1}
  }
  else if (action.type === "PREVIOUS_PAGE") {
    return {...state, number: state.number - 1}
  }
  else if (action.type === "SET_PAGE_NUMBER") {
    return {...state, number: action.number }
  }
  else if (action.type === "CHOOSE_PAGE_SIZE") {
    // ...
    return {
      ...state,
      number: Math.ceil(state.number/(action.size/state.size)), 
      size: action.size
    }
  }
  else if (action.type === "SHOW_MORE") {
    return {...state, size: state.size + 12}
  }
  else return state;
}

export const setPageAC = (number)=> {
  return {
    type: "SET_PAGE_NUMBER",
    number
  }
}

export const choosePageSizeAC = (size) => {
  return {
    type: "CHOOSE_PAGE_SIZE",
    size
  }
}