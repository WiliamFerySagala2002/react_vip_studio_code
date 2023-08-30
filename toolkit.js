import toolkit from '@reduxjs/toolkit'
const { configureStore, createAction, createReducer } = toolkit

const addToCart = createAction('ADD_TO_CART')
const login = createAction('CREATE_SESSION')

const cartReducer = createReducer([], (builder) =>
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload)
  })
)

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true
  })
})

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
})
console.log('oncreate store: ', store.getState())

store.subscribe(() => console.log('STORE CHANGE: ', store.getState()))

store.dispatch(addToCart({ id: 2, qty: 2 }))
store.dispatch(addToCart({ id: 3, qty: 3 }))
store.dispatch(login())
