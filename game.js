// import * as promiseModule from './promise-version.js'
import {getClue as getClueFromPromise} from './promise-version.js'
import {getClue as getClueFromAsyncAwait} from './promise-version.js'
import {getClue as getClueFromCallBack} from './callback-version.js'

// import  getClueFromPromise from './promise-version.js'
const scoreEle = document.getElementById("score")
scoreEle.innerHTML = 0
const categoryTitle = document.getElementById("category-title")
const question = document.getElementById("question")
const value = document.getElementById("value")
const invalidCount = document.getElementById("invalid-count")
const usePromiseBtn = document.getElementById('use-promise')
const answer = document.getElementById('answer')
const useAsyncBtn = document.getElementById('use-async-await')
const useCallBackBtn = document.getElementById('use-callback')
const checkResponse = document.getElementById('check-response')
const responseInput = document.getElementById('player-response')

const jsonHandler = json => {
  categoryTitle.innerHTML = json[0].category.title
  question.innerHTML = json[0].question
  value.innerHTML = json[0].value
  answer.innerHTML = json[0].answer
  json[0].invalid_count && json[0].invalid_count > 0
    ? invalidCount.innerHTML = 'invalid'
    :invalidCount.innerHTML = 'valid'
  console.log(answer.innerHTML)
}

usePromiseBtn.addEventListener('click', () => {
  try {
    //store values
    getClueFromPromise()
      .then(json => {
        jsonHandler(json)
      })
  } catch(error) {
    console.log(error);
    return error
  }
})

useAsyncBtn.addEventListener('click', async () => {
  try {
    const json = await getClueFromAsyncAwait()
    jsonHandler(json)
  } catch(error) {
    console.log(error);
  }
})

useCallBackBtn.addEventListener('click', () => {
  getClueFromCallBack((error, data) => {
    if (error !== null) {
      return console.error(error)
    } else {
      jsonHandler(data)
    }
  })
})

responseInput.addEventListener('keydown', () => {
  checkResponse.classList.remove('is-hidden')
})

checkResponse.addEventListener('click', e => {
  let value = responseInput.value
  if (value.trim() == answer.innerHTML) {
    scoreEle.innerHTML++
  } else {
    scoreEle.innerHTML--
  }
  answer.classList.remove('is-hidden')
})
