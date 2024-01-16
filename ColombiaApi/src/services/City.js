export const getAllCitys = async () => {
  try{
    const response = await fetch(`https://api-colombia.com/api/v1/City`)
    const data = await response.json()
    return data      
  }catch{
    throw new Error("Error en la consulta!")
  }
}