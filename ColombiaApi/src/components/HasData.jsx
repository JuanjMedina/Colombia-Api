/* eslint-disable react/prop-types */

import { Spinner } from '@nextui-org/react'
import { PresidentData } from './PresidentData'
import { useContext } from 'react'
import { dataConext } from '../context/data'
import RegionesData from './RegionesData'
import CityData from './City'

export default function HasData() {
  const { data, loading, error, selectOption } = useContext(dataConext)
  return (
    <section className='overflow-x-hidden'>
      {loading && (
        <Spinner
          className="w-full flex justify-center "
          color="primary"
          label="Cargando..."
          labelColor="primary"
        />
      )}
      {selectOption === '' && (
        <p className="text-xl  text-center font-semibold text-white/50">
          Seleccione una categoria para buscar!
        </p>
      )}

      {selectOption === 'Presidentes' && <PresidentData data={data} />}
      {selectOption === 'Regiones' && <RegionesData data={data} />}
      {selectOption === 'Ciudades' && <CityData data={data} />}
    </section>
  )
}
