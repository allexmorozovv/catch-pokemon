import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState('')
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => {
      clearTimeout(timerId)
    }
  }, [value, delay])
  return debounceValue
}


  // function debounce(fn, t) {
  //   let id
  //   return function(...args) {
  //     clearTimeout(id)
  //     id = setTimeout(()=> {
  //       fn(...args)
  //     }, t)
  //   }
  // }