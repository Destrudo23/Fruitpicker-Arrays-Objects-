import {emojiData} from "./data.js"


const radioButtonsList = document.getElementById("color-radios");
const getImageBtn = document.getElementById("get-image-btn")
const fruitsOnlyOption = document.getElementById("fruits-only-option")


// create the array of the colors

function getEmojiArray(plants) {
  const plantsColorsArray = []
  for (let plants of emojiData) {
    for (let colors of plants.colorTags) {
      if (!plantsColorsArray.includes(colors)) {
        plantsColorsArray.push(colors)
      }
    }
  }
  return plantsColorsArray
}


// render the array in form of radio buttons

function renderEmojiRadios(plants) {
  let radioButtons = ""
  const colors = getEmojiArray(plants)
    for (let color of colors){
      radioButtons += `
      <div class="radio">
        <label for="${color}">${color}
        </label>
        <input 
          type="radio" 
          id="${color}" 
          value="${color}"
          name="color-radios">
      </div>
          `
    }
  radioButtonsList.innerHTML = radioButtons
  
}
renderEmojiRadios(emojiData)


radioButtonsList.addEventListener("change", highlightCheckedOption) 

// remove css property by iterating the radios and remove its highlight class
// and add css property to class without defining in advance
  function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName("radio")
      for (let radio of radios) {
        radio.classList.remove("highlight")
      }
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
  }


// checking if Fruits only is checked and getting the value of the checked radio when button is clicked

getImageBtn.addEventListener("click", renderFruit) 

function getMatchingEmoji(e) {
   if (document.querySelector('input[type="radio"]:checked')) {
    const selectedColor = document.querySelector('input[type="radio"]:checked').value
    const isFruit = fruitsOnlyOption.checked

// iterating through data array and filter by color
    const matchingEmojis = emojiData.filter(function(emoji){
      if (isFruit) {
        return emoji.colorTags.includes(selectedColor) && emoji.isFruit
        }
        else {
          return emoji.colorTags.includes(selectedColor)
        }
      }
      )
      return matchingEmojis
    }
  }

function getSingleFruitObject() {
  const fruitArray = getMatchingEmoji()
  if (fruitArray.length === 1){
    console.log(fruitArray[0])
  }
  // starting point next session
}

function renderFruit() {
  getSingleFruitObject() // temp
}
