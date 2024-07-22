import { pageReducer } from "./pageReducer"

describe("pageReducer",()=> {
  test("page size with 10",()=> {
    const startState = {
        number: 10,
        size: 12
      }
      // 109..120


      const endState = {
        number: 5,
        size: 24
      } // 97..120

    const action = {type: "CHOOSE_PAGE_SIZE", size: 24}

    expect(pageReducer(startState, action)).toEqual(endState)
    
  })
  test("page size with 9 - 24",()=> {

    const startState = {
        number: 9,
        size: 12
      }
      // 97..108


      const endState = {
        number: 5,
        size: 24
      } // 97..120
      const action = {type: "CHOOSE_PAGE_SIZE", size: 24}
      expect(pageReducer(startState,action)).toEqual(endState)
  })
  test("page size with 9 - 36",()=> {

    const startState = {
        number: 9,
        size: 12
      }
      // 97..108


      const endState = {
        number: 3,
        size: 36
      } // 1..36 27..72 73..108
      const action = {type: "CHOOSE_PAGE_SIZE", size: 36}
      expect(pageReducer(startState,action)).toEqual(endState)
  })
})