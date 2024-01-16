import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import { useData } from '../hooks/useData'

const useInput = () => {
  const [inputText, setInputText] = useState('')
  const [inputSelect, setInputSelect] = useState('')
  return { inputText, setInputText, inputSelect, setInputSelect }
}

function SearchInputs() {
  const { inputText, setInputText, inputSelect, setInputSelect } = useInput()
  const { searchData } = useData()
  const setChangeText = (e) => {
    setInputText(e.target.value)
  }
  const setChangeSelect = (e) => {
    setInputSelect(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    searchData({ selectOption: inputSelect })
    setInputSelect('')
  }

  return (
    <form
      action=""
      className="flex flex-col items-center justify-around gap-5 lg:flex-row"
      onSubmit={handleSubmit}
    >
      <Input type="text" label="Text" size="sm" onChange={setChangeText} />
      <Select
        isRequired
        placeholder="Presidentes Regiones..."
        label="Select Category"
        size="sm"
        onChange={setChangeSelect}
      >
        <SelectItem key={'Presidentes'}>Presidentes</SelectItem>
        <SelectItem key={'Regiones'}>Regiones</SelectItem>
        <SelectItem key={'Ciudades'}>Ciudades</SelectItem>
        <SelectItem key={'Departamentos'}>Departamentos</SelectItem>
      </Select>
      <Button
        color="success"
        radius="lg"
        variant="shadow"
        size="lg"
        type="submit"
      >
        Buscar
      </Button>
    </form>
  )
}

export default SearchInputs
