import { createStore, createApi } from 'effector'

const $counter = createStore(0)

const { increment, decrement } = createApi($counter, {
  increment: (state) => state + 1,
  decrement: (state) => state - 1,
})

export { $counter, increment, decrement }
