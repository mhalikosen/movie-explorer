import { useEffect, useState } from 'react'

const useDebounce = (initialValue, delay = 300) => {
  const [actualValue, setActualValue] = useState(initialValue)

  const [debounceValue, setDebounceValue] = useState(initialValue)

  useEffect(() => {
    const debounceId = setTimeout(() => setDebounceValue(actualValue), delay)

    return () => clearTimeout(debounceId)
  }, [actualValue, delay])

  return [debounceValue, setActualValue, actualValue]
}

export default useDebounce
