// import * as promiseModule from './promise-version.js'
import {getClue as getClueFromPromise} from './promise-version.js'
import {getClue as getClueFromAsyncAwait} from './promise-version.js'

// import  getClueFromPromise from './promise-version.js'

const score = document.getElementById("score")
const categoryTitle = document.getElementById("category-title")
const question = document.getElementById("question")
const value = document.getElementById("value")
const invalidCount = document.getElementById("invalid-count")
const usePromiseBtn = document.getElementById('use-promise')
const answer = document.getElementById('answer')
const useAsyncBtn = document.getElementById('use-async-await')

usePromiseBtn.addEventListener('click', () => {
  try {
    //store values
    getClueFromPromise()
      .then(json => {
        console.log(json)
        categoryTitle.innerHTML = json[0].category.title
        question.innerHTML = json[0].question
        value.innerHTML = json[0].value
        answer.innerHTML = json[0].answer
        json[0].invalid_count && json[0].invalid_count > 0
          ? invalidCount.innerHTML = 'invalid'
          :invalidCount.innerHTML = 'valid'
      })
  } catch(error) {
    console.log(error);
    return error
  }
})

useAsyncBtn.addEventListener('click', async () => {
  try {

    const json = await getClueFromAsyncAwait()
    console.log(json)

    categoryTitle.innerHTML = json[0].category.title
    question.innerHTML = json[0].question
    value.innerHTML = json[0].value
    answer.innerHTML = json[0].answer
    json[0].invalid_count && json[0].invalid_count > 0
      ? invalidCount.innerHTML = 'invalid'
      :invalidCount.innerHTML = 'valid'
  } catch(error) {
    console.log(error);
  }
})

const test = async function getClue() {
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


console.log(await test())
