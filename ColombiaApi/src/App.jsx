import Footer from './components/Footer'
import HasData from './components/HasData'
import SearchInputs from './components/SearchInput'
import { DataProvider } from './context/data'
function App() {
  return (
    <DataProvider>
      <main
        className="min-h-screen h-full w-screen flex flex-col items-center text-white overflow-hidden
      bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      >
        <div className="py-8 px-3">
          <h1 className="text-3xl font-semibold text-center">
            Bienvenidos a la web de la Api de
            <span className="text-yellow-400 font-bold"> CO</span>
            <span className="text-blue-700 font-bold">LOM</span>
            <span className="text-red-600 font-bold">BIA</span>
          </h1>
          <p className="text-lg text-white/75 text-center mt-5">
            Formulario par saber acerca de las ubicaciones y datos de Colombia
          </p>
        </div>
        <div className="w-[45%]  text-black flex flex-col gap-8 max-w-4xl">
          <SearchInputs />
          <HasData />
        </div>   
        <Footer />
      </main>
    </DataProvider>
  )
}

export default App
