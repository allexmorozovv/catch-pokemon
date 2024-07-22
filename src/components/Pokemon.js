import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames';

function Pokemon({ url, name}) {
  const id = String(url).slice(34, -1)
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  
  const isCaught = useSelector(state => state.catchedIds.includes(id));
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch({
      type:"CATCH_POKEMON",
      id
    })
  }
  return (
    // https://www.npmjs.com/package/classnames
    <div>
    <div className={cn('pokemon',  isCaught && "pokemonCaught")}>
      <div className='pokemon__name'>{name} #{id}</div>
      <img className="pokemon__img" src={image} alt='pokemon'></img>
      <button className='pokemon__btn' onClick={()=> handleClick(id)}>{isCaught?'let go':'catch'}</button>
    </div>
    </div>
  )
}



export default Pokemon