import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { pokemonsReducer } from "./pokemonsReducer"
import { catchReducer } from "./catchReducer"
import { thunk } from "redux-thunk"
import { pageReducer } from "./pageReducer"
import { fetchPokemons } from "../asyncAction/fetchPokemons"

const rootReducer = combineReducers({
  pokemons:pokemonsReducer,
  catchedIds:catchReducer,
  page: pageReducer
})



const m1 = storeApi => next => action => {
  console.log("m1", action);
  next(action);
  if( ["NEXT_PAGE", "PREVIOUS_PAGE", "CHOOSE_PAGE_SIZE", "SET_PAGE_NUMBER"].includes (action.type)) {
    
    console.log("type === pageReducer");
    // const state = storeApi.getState()
    //  state.page.number = 3
    storeApi.dispatch(fetchPokemons())
  }
 
}
const m2 = storeApi => next => action => {
  // console.log("m2", next.toString());
  next(action);
}
const m3 = storeApi => next => action => {
  // console.log("m3", next.toString());
  next(action);
}


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk, m1, m2, m3))

store.dispatch(fetchPokemons( ));


// console.log('pn', pageNumber);

// console.log(store);