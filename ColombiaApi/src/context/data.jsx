/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const dataConext = createContext()

export function DataProvider({ children }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState('')
  const [selectOption , setSelectOption] = useState('')
  return (
    <dataConext.Provider
      value={{
        setData,
        setLoading,
        setError,
        setSelectOption,
        data,
        loading,
        error,
        selectOption,
      }}
    >
      {children}
    </dataConext.Provider>
  )
}
