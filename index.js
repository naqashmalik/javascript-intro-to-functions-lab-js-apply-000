function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}


function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) //naqaash Naqaash NAQAAASH
{
  if (string.toLowerCase === string)
  {
    return "I can\'t hear you!"
  }
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false
