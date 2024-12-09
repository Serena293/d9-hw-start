// const initalState = {
// salva qui le propità iniziali, altrimenti risulta 'undefined'
// }

const initialState = {
  favoites: {
    books: []
  }
}
//assegniamo initialState come default
const mainReducer = (state={initialState}, action)  => {
  switch (action.type)
  {default: return state}
}
export default mainReducer