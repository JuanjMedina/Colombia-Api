import { Link, useParams } from 'react-router-dom'
import { usePresident } from '../hooks/usePresident'
import { useEffect } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  Spinner
} from '@nextui-org/react'
import House from '../icons/House'

export default function Presidentes() {
  let { name, id } = useParams()
  const { presidentFetching, president, error, loading } = usePresident({ id })
  useEffect(() => {
    presidentFetching({ name, id })
  }, [])
  return (
    <main
      className="min-h-screen h-full w-screen flex flex-col items-center justify-center text-white relative
      bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      {loading ? (
        <Spinner />
      ) : (
        <ul className="w-[80%] flex flex-col gap-8 overflow-x-hidden">
          {president.map((item) => (
            <li key={item.id}>
              <Card className="w-full h-auto">
                <CardBody className="">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1 flex flex-col  items-center justify-center gap-5">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={150}
                        height={150}
                      />
                      <h2 className="text-xl font-bold text-center">
                        {item.name}
                      </h2>
                    </div>
                    <div className="col-span-4">
                      <p className="text-pretty text-base">
                        {item.description}
                      </p>
                      <div className="flex gap-6 mt-4">
                        <Chip color="primary">{item.startPeriodDate}</Chip>
                        <Chip color="warning">
                          {item.endPeriodDate || 'actualidad'}
                        </Chip>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      )}
      <div className="absolute top-0 left-0 px-8 py-6">
        <Link to='/'>
          <House ancho={30} alto={30} />
        </Link>
      </div>
    </main>
  )
}
