/* eslint-disable react/prop-types */

import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export default function HasData({ data }) {
  return (
    <ul className="grid grid-cols-3 gap-x-4 gap-y-7 ">
      {data.map((item) => (
        <li key={item.id} className="">
          <Link to={`/Presidentes/${item.name}/${item.id}`}>
            <Card fullWidth={true} className="h-full  bg-card-color ">
              <CardHeader className="h-48 flex w-full justify-center ">
                <Image
                  width={125}
                  height={125}
                  src={item.image}
                  alt={item.name}
                  isZoomed
                  
                ></Image>
              </CardHeader>
              <CardBody>
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-black/95 text-balance">
                  {item.startPeriodDate} - {item.endPeriodDate || 'Actualidad'}
                </p>
              </CardBody>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  )
}
