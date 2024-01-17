/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const dataConext = createContext()

export function DataProvider({ children }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState('')
  const [selectOption, setSelectOption] = useState('')
  const [inputText, setInputText] = useState('')

  const filterData = ({ textInput }) => {
    const filter = data.filter((item) => {
      return item.name.toLowerCase().includes(textInput.toLowerCase())
    })
    setData(filter)
  }

  return (
    <dataConext.Provider
      value={{
        filterData,
        setInputText,
        setData,
        setLoading,
        setError,
        setSelectOption,
        data,
        loading,
        error,
        selectOption,
        inputText
      }}
    >
      {children}
    </dataConext.Provider>
  )
}
