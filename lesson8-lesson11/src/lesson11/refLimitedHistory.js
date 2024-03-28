import { toValue, watchEffect } from 'vue';
import { useRefHistory } from './refHistory';

export const useRefLimitedHistory = (source, capa) => {
  const {history, undo} = useRefHistory(source)
  watchEffect(() => {
    if(history.value.length > toValue(capa)){
      history.value.shift()
    }
  })

  return {
    history,
    undo
  }
}