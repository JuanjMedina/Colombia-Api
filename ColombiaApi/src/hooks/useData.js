import { useContext } from 'react'
import { getAllPresidents } from '../services/President'
import { dataConext } from '../context/data'
import { getAllRegions } from '../services/Region'
import { getAllCitys } from '../services/City'

export const useData = () => {
  const { setData, setLoading, setError,setSelectOption } = useContext(dataConext)

  const searchData = ({ selectOption }) => {
    if (selectOption === 'Presidentes') {
      setSelectOption(selectOption	)
      searchPresident()
    }
    else if (selectOption === 'Regiones' ){
      setSelectOption(selectOption	)
      searchRegion()
    }
    else if(selectOption === 'Ciudades'){
      setSelectOption(selectOption)
      return searchCitys()
    }
    else {
      console.log('No hay datos')
    }

  }
  const searchPresident = async () => {
    try {
      setLoading(true)
      setError(null)
      const presidentData = await getAllPresidents()
      setData(presidentData)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const searchRegion = async () => {
    try {
      setLoading(true)
      setError(null)
      const departmentData = await getAllRegions()
      setData(departmentData)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const searchCitys = async ()=> {
    try {
      setLoading(true)
      setError(null)
      const cityData = await getAllCitys()
      const newCityData = cityData.slice(0,99)
      return setData(newCityData)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  return { searchData }
}
