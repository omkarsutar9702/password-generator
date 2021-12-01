const password_char_range = document.getElementById("password_char_range")
const password_char_number = document.getElementById("password_char_number")
const form = document.getElementById("form")
const password_display = document.getElementById("password_display")
const password_num = document.getElementById("password_num")
const password_symbol = document.getElementById("password_symbol")
const password_upper = document.getElementById("password_upper")
password_char_number.addEventListener("input" , syncCharacterAmount)
password_char_range.addEventListener("input" , syncCharacterAmount)
const uppercase = arrayformlowtohigh(65 , 90)
const lowercase = arrayformlowtohigh(97 , 122)
const passnum = arrayformlowtohigh(48 , 57)
const symbolspass = arrayformlowtohigh(33,47).concat(
    arrayformlowtohigh(58,64)
)




form.addEventListener("submit" , e =>{
    e.preventDefault()
    const characterAmount = password_char_number.value
    const includeUppercase = password_upper.checked
    const includeNumbers = password_num.checked
    const includeSymbols = password_symbol.checked
    const password = generatePassword(characterAmount , includeUppercase , includeNumbers , includeSymbols)
    password_display.innerText = password
})

function generatePassword(characterAmount , includeUppercase , includeNumbers , includeSymbols){
    let charcodes = lowercase 
    if (includeUppercase)charcodes = charcodes.concat(uppercase)
    if (includeNumbers)charcodes = charcodes.concat(passnum)
    if (includeSymbols)charcodes = charcodes.concat(symbolspass)
    const passwordchar = []
    for (let i = 0; i < characterAmount; i++){ 
        const character = charcodes[Math.floor(Math.random() * charcodes.length)]
        passwordchar.push(String.fromCharCode(character))
    }
    return passwordchar.join("")
}

function arrayformlowtohigh(low,high){
    const array = []
    for (let i = low; i<=high; i++){
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e){
    const value = e.target.value
    password_char_number.value = e.target.value
    password_char_range.value = value
}
