const emojiData = [
    {
      colorTags: ["yellow"],
      isFruit: true,
      image: "🍋",
    },
    {
      colorTags: ["red", "green"],
      isFruit: true,
      image: "🍉",
    },
    {
      colorTags: ["red", "green"],
      isFruit: false,
      image: "🍅",
    },
    {
      colorTags: ["green", "yellow"],
      isFruit: false,
      image: "🌽",
    },
    {
      colorTags: ["green"],
      isFruit: false,
      image: "🥦",
    },
    {
      colorTags: ["green", "brown"],
      isFruit: true,
      image: "🥝",
    },
    {
      colorTags: ["brown"],
      isFruit: false,
      image: "🧅",
    },
]

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




