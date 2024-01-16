/* eslint-disable react/prop-types */
import { Card, CardBody, Chip } from '@nextui-org/react'
export default function DepartamentsData({ data }) {
  return (
    <ul className="grid lg:grid-cols-3 gap-x-4 gap-y-7">
      {data.map((item) => (
        <li key={item.id}>
          <Card fullWidth={true} className="h-full  bg-card-color ">
            <CardBody>
              <h3 className="text-2xl font-semibold text-center">
                {item.name}
              </h3>
              <div className='flex flex-col gap-4 mt-3 justify-center items-center'>
              <Chip color='warning'>Popularidad:{item.population}</Chip>
              <Chip color='warning'>Superficie:{item.surface}</Chip>
              </div>
            </CardBody>
          </Card>
        </li>
      ))}
    </ul>
  )
}
