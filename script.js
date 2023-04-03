import {emojiData} from "./data.js"


const radioButtonsList = document.getElementById("color-radios");

function getEmojiArray(plants) {
  const plantsColorsArray = []
  for (let plants of emojiData) {
    for (let colors of plants.colorTags) {
      plantsColorsArray.push(colors)
    }
  }
  return plantsColorsArray
}

function renderEmojiRadios(plants) {
  let radioButtons = ""
  const colors = getEmojiArray(plants)
    for (let color of colors){
      radioButtons += `<p>${color}</p>`
    }

  radioButtonsList.innerHTML = radioButtons
}

renderEmojiRadios(emojiData)




