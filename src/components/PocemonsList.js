import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Pokemon from './Pokemon';
import { fetchPokemons } from '../asyncAction/fetchPokemons';



function PocemonsList() {
  // useEffect вызывается непосредственно в компоненте. Это норм?

  // Page handleChangePageNumber
  
  // как решать где использовать редьюсер , а где useStste?

  // динамический скролл?
  const pokemons = useSelector(state => state.pokemons);
  const pageNumber = useSelector(state => state.page.number);
  const pageSize = useSelector(state => state.page.size);

  const dispatch = useDispatch();
  // console.log("pl", pokemons);

  // useEffect(() => {
  //   dispatch(fetchPokemons(pageNumber, pageSize))
  // }, [dispatch, pageNumber, pageSize])

  const getPokemons = () => {
    // работает при отсутствии useEffect
    dispatch(fetchPokemons(pageNumber, pageSize));
  }

  const showMorePokemons = () => {
    dispatch({type: "SHOW_MORE"})
    // const size = pageSize + 12
    // dispatch(fetchPokemons(pageNumber, size)) // блокируется после 1 клика
  }







  return (
    <div>
      <div className='wrapper'>
        {pokemons.map(pok => {
          return (
            <Pokemon 
              // id={pok.id} // можно сразу доставать id в fetchPokemons
              key={String(pok.url).slice(34, -1)}
              url={pok.url} 
              name={pok.name}
            />
          )
        })}
      </div>
      <div className='pokemons_footer'>
        <button disabled={pokemons.length > 0} onClick={getPokemons}>get pokemons</button>
        <button onClick={showMorePokemons}>show more</button>
      </div>
    </div>
  )
}

export default PocemonsList