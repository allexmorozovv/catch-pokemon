import React , { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageAC} from '../redux/pageReducer'
import { useDebounce } from '../hooks/useDebounce'

// https://www.npmjs.com/package/use-debounce

function PageNumberForm() {
  const [toPage, setToPage] = useState("")
  const debouncedToPage = useDebounce(toPage, 700)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toPage !== "") {
      handleClickSetPageNumber(debouncedToPage)
      setToPage("")
    }
  }, [debouncedToPage]);

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  
  const handleChangePageNumber = (event) => {
    // "SET_PAGE_NUMBER" реализован(?) 2 способами с локальным стейтом и без. 
    // думаю есть 3 вариант. Без локального стейта и без моментальной перезагрузки
  
      setToPage(event.target.value);   // <=== useState
  
      // dispatch({                          // <=== dispatch
      //   type: "SET_PAGE_NUMBER",
      //   number: Number(event.target.value)  
      // })
      // dispatch(setPageAC(Number(event.target.value))) // дубль 
  
     
    }
    


  const handleClickSetPageNumber = (toPage) => {
    // работает с локальныым state toPage при клике на кнопку
    dispatch(setPageAC(Number(toPage)));

    // dispatch({                                     // дубль
    //   type: "SET_PAGE_NUMBER",
    //   number: Number(toPage)
    // })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input  
              className="page__input"type="number" 
              value={toPage} 
              onChange={handleChangePageNumber} 
              placeholder='go to page...' />
            <button onClick={()=> handleClickSetPageNumber(toPage)}>go</button>
          </form>
      </div>
  )
}

export default PageNumberForm