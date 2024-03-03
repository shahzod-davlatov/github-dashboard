import { effectorRequest } from '../api/query'

import { createStore, createEvent, sample, createEffect } from 'effector'
import { createGate } from 'effector-vue/composition'

interface Film {
  id: string
  name: string
  description: string
}

export const PostsGate = createGate({
  name: 'Test',
})

export const fetchFilmsFx = createEffect(async () => {
  const { getCinemaToday } = await effectorRequest()

  return getCinemaToday.films
})

export const $films = createStore<Film[]>([]).on(
  fetchFilmsFx.doneData,
  (_, films) => films
)

export const $limit = createStore(1)

export const increment = createEvent()
export const decrement = createEvent()

sample({
  clock: increment,
  source: $limit,
  fn: (limit) => limit + 1,
  target: $limit,
})

sample({
  clock: decrement,
  source: $limit,
  fn: (limit) => limit - 1,
  target: $limit,
})

$limit.reset(PostsGate.close)
$films.reset(PostsGate.close)

$films.watch((state) => {
  console.log(state)
})
