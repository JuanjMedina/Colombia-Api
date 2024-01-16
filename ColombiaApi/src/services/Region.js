export const getAllRegions = async () => {
  try{
    const response = await fetch(`https://api-colombia.com/api/v1/Region/`)
    const data = await response.json()
    return data      
  }catch{
    throw new Error("Error en la consulta!")
  }
}