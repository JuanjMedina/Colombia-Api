export const getAllPresidents = async () => {
  try {
    const response = await fetch(`https://api-colombia.com/api/v1/President/`)
    const data = await response.json()
    return data
  } catch (e) {
    throw new Error('Error ')
  }
}

export const getPresidentByName = async ({ namePresident }) => {
  try {
    const response = await  fetch(
      `https://api-colombia.com/api/v1/President/name/${namePresident}`
    )
    const data = await response.json()
    
    return data 
  } catch {
    throw new Error('Error en la peticion !')
  }
}
