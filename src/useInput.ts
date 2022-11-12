import { ChangeEvent, useState } from 'react'

/**
 * This hook allows you to handle state for inputs
 * @param {number} initialValue - initial value for useState
 * @returns {object} object that should be used for managing inputs
 */
const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange: handleChange,
    setValue,
  }
}

export default useInput
