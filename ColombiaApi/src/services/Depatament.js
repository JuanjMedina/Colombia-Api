export const getAllDepartments = async () => {
  try {
    const response = await fetch(`https://api-colombia.com/api/v1/Department`)
    const data = await response.json()
    return data
  } catch (e) {
    throw new Error('Error ')
  }
}