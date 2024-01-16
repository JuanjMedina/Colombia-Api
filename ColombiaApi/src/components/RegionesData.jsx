/* eslint-disable react/prop-types */
import { Card, CardBody } from '@nextui-org/react'

function RegionesData({ data }) {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-7 ">
        {data.map((item) => (
          <li key={item.id}>
            <Card fullWidth={true} className="h-full  bg-card-color ">
              <CardBody>
                <h3 className="text-2xl font-semibold text-center mb-3">
                  {item.name}
                </h3>
                <p className="text-black/80 text-pretty">{item.description}</p>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RegionesData
