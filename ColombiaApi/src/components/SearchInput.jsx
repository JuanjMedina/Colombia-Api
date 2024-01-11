import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'

const useInput = () => {
  const [inputText, setInputText] = useState('')
  const [inputSelect, setInputSelect] = useState('')
  return { inputText, setInputText, inputSelect, setInputSelect }
}
function SearchInputs() {
  const { inputText, setInputText, inputSelect, setInputSelect } = useInput()
  const setChangeText = (e) => {
    setInputText(e.target.value)
  }
  const setChangeSelect = (e) => {
    setInputSelect(e.target.value)
  }
  const handleSubmit = (e)=> {
    e.preventDefault()
  }
  return (
    
      <form action="" className="flex items-center justify-around gap-5" onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Text"
          isRequired
          size="sm"
          onChange={setChangeText}
        />
        <Select
          placeholder="Presidentes Regiones..."
          label="Select Category"
          size="sm"
          onChange={setChangeSelect}
        >
          <SelectItem key={'Presidentes'}>Presidentes</SelectItem>
          <SelectItem key={'Regiones'}>Regiones</SelectItem>
        </Select>
        <Button color="success" radius="lg" variant="shadow" size="lg">
          Buscar
        </Button>
      </form>
    
  )
}

export default SearchInputs
