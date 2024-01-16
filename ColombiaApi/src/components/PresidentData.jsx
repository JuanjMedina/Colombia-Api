/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'
export function PresidentData({ data }) {
  return (
    <ul className="grid  gap-x-4 gap-y-7  xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
      {data.map((item) => (
        <li key={item.id}>
          <Link to={`/Presidentes/${item.name}/${item.id}`}>
            <Card fullWidth={true} className="h-full  bg-card-color ">
              <CardHeader className="h-48 flex w-full justify-center ">
                <Image
                  width={125}
                  height={125}
                  src={
                    item.image
                      ? item.image
                      : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencolombia.com%2Fderecho%2Frevistajurisdiction%2Fjurisdictio55%2Fpostulacion-cargo-presidente%2F&psig=AOvVaw1qVblTeztcRF0SwIEE5JBv&ust=1705264754280000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjK0ric24MDFQAAAAAdAAAAABAD'
                  }
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
