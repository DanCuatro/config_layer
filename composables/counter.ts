export const useCounter = () => {
  const counter = ref(0)
  const add = () => counter.value++
  return {add,counter}
}
