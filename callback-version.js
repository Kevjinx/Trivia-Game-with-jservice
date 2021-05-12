export const getClue = (cb) => {
  const aboce = new XMLHttpRequest()
  aboce.addEventListener('readystatechange', () => {
    console.log(XMLHttpRequest.DONE);
    if (aboce.readyState === XMLHttpRequest.DONE) {
      if (200 <= aboce.status && aboce.status < 300) {
        const data = JSON.parse(aboce.responseText);
        cb(null, data)
      } else {
        cb(aboce.status); // this is the error, status code
      }
    } else {
      return;
    }
  })
  aboce.open('GET', 'https://jservice.io/api/random')
  aboce.send()
}
