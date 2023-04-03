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
            //console.log(e.target.id)
  }


// chekcing if Fruits only is checked and getting the value of the checked radio when button is clicked  

  getImageBtn.addEventListener("click", getMatchingEmoji) 

  function getMatchingEmoji(e) {
    const isFruit = fruitsOnlyOption.checked
    console.log(isFruit)

    if (document.querySelector('input[type="radio"]:checked')) {
      const selectedColor = document.querySelector('input[type="radio"]:checked').value
      console.log(selectedColor)
    }
  }
