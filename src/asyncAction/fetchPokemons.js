import { addAllPokemonsAC, showMorePokemonsAC } from "../redux/pokemonsReducer";

// export const fetchPokemons = (pageNumber, pageSize) => {

//  return function(dispatch) {
//     const offsetScore = (pageNumber-1) * pageSize
//     fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offsetScore}&limit=${pageSize}`)
//       .then(response =>response.json())
//       .then(data =>dispatch(addAllPokemonsAC(data.results)))
//       // .then(data =>console.log(data.results))
//  }
// }

// export const fetchPokemons = (pageNumber, pageSize) => {

//  return async function(dispatch) {
//   const offsetScore = (pageNumber-1) * pageSize
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offsetScore}&limit=${pageSize}`)
//     const data = await response.json()
//     const result = data.results.map(pokemon => {
//       return {
//       id: pokemon.url.slice(34, -1),
//       name: pokemon.name
//       }
//     })
//     dispatch(addAllPokemonsAC(result))
//  }
// }

export const fetchPokemons =  () => {
  
// https://redux.js.org/usage/writing-custom-middleware

 // Rules to make compatible middleware

 // Calling the next middleware
  // Returning the dispatch return value

  return async function(dispatch, getState) {
    const state = getState()
    const pageNumber = state.page.number
    const pageSize = state.page.size
    const offsetScore = (pageNumber-1) * pageSize
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offsetScore}&limit=${pageSize}`)
    const data =  await response.json()
    // dispatch(addAllPokemonsAC(data.results))
    dispatch({
      type:"ADD_ALL_POKEMONS",
      pokemons: data.results
    })
    
    // dispatch(showMorePokemonsAC(data.results))
  }
}
 