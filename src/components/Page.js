 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  choosePageSizeAC } from '../redux/pageReducer'
import PageNumberForm from './PageNumberForm'

function Page() {

  const pageNumber = useSelector(state => state.page.number)
  const pageSize = useSelector(state => state.page.size)
  const catchedIds = useSelector(state => state.catchedIds)
  const dispatch = useDispatch()
  // console.log('ps', pageSize);
  // console.log('pn', pageNumber);
  // console.log('tp', toPage);


  const handleGoToNextPage = () => {
    dispatch({
      type:"NEXT_PAGE"
    });
  }
  
  const handleGoToPreviousPage = () => {
    dispatch(
      {type:"PREVIOUS_PAGE"
    });
  }



  const handleChangePageSize = (event) => {
    dispatch(choosePageSizeAC(Number(event.target.value)))

    // dispatch({                                     // дубль 
    //   type: "CHOOSE_PAGE_SIZE",
    //   size:  Number(event.target.value)  
    // })

  }
 
  const handleFreedomClick = () => {
    dispatch({
      type:"FREEDOM_FOR_POKEMON"
    })
  }

  return (
    <div className='pokemons__header'>
      <div className='pokemon__header-counter'>
        <div>Pokemon caught: {catchedIds.length}</div>
        <button onClick={handleFreedomClick}>freedom for pokemons</button>
      </div>
      <div className='pokemons__header_page'>
        <div className='pokemons__header-btn'>
          <button
            onClick={handleGoToPreviousPage} disabled={pageNumber === 1}>previous page</button>
          <div>page: {pageNumber}</div>
             
          <button onClick={handleGoToNextPage}>next page</button>
        </div>
        <PageNumberForm/>
          {/* <form onSubmit={handleSubmit}>
            <input  
              className="page__input"type="number" 
              value={toPage} 
              onChange={handleChangePageNumber} 
              placeholder='go to page...' />
            <button onClick={()=> handleClickSetPageNumber(toPage)}>go</button>
          </form> */}
          
          display by: 
          <select 
            value={pageSize} 
            onChange={handleChangePageSize}
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
    </div>
  )
}

export default Page