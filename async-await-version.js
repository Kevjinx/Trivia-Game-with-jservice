export async function getClue() {
  try {
    const result = await fetch('https://jservice.io/api/random', {})
    if(!result.ok) {
      throw Error();
    } else {
      const jsonResult = await result.json()
      console.log(jsonResult);
      return jsonResult
    }
  } catch(error) {
    console.log(error)
  }
}
