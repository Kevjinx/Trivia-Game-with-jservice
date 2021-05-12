export const getClue = () => {
  // let resultJson;
  const fetchEle =  fetch(`https://jservice.io/api/random`, {})
    .then((res, error) => {
      if (!res.ok) {
        console.log(error)
      } else {
        return res
      }
    })
    .then(res => res.json())

  return fetchEle
  //   .then(json => {
  //     resultJson = json
  //   })
  // return resultJson
}
