import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'

/* eslint-disable react/prop-types */
export default function CityData({ data }) {
  return (
   <div className='overflow-x-hidden max-w-full'>
     <ul className="grid grid-cols-3 gap-x-4 gap-y-7">
      {data.map((item) => (
        <li key={item.id}>
          <Card fullWidth={true} className="h-full  bg-card-color ">
            <CardHeader className="h-32 flex w-full justify-center ">
              <Image
                width={155}
                height={170}
                src={
                  'https://www.shutterstock.com/image-vector/colombia-patriotic-banner-design-colombian-260nw-1438183319.jpg'
                }
                alt={item.name}
                isZoomed
              ></Image>
            </CardHeader>
            <CardBody>
              <h3 className="text-2xl font-semibold text-center">{item.name}</h3>
            </CardBody>
          </Card>
        </li>
      ))}
    </ul>
   </div>
  )
}
