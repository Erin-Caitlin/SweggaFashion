let dataEntry1 = document.querySelector('[data-entry1]')
let output1 = document.querySelector('[output1]')
let dataEntry2 = document.querySelector('[data-entry2]')
let output2 = document.querySelector('[output2]')
let output3 = document.querySelector('[output3]')
let btnCalculate = document.querySelector('[calculate]')

dataEntry1.addEventListener('change', total1)
dataEntry2.addEventListener('change', total2)
btnCalculate.addEventListener('click', grandTotal)

function total1() {
    let answer1 = dataEntry1.value * 150.95
    output1.textContent =(`R${answer1.toFixed(2)}`)
    return answer1
}

function total2() {
    let answer2 = dataEntry2.value * 180.95
    output2.textContent =(`R${answer2.toFixed(2)}`)
    return answer2
}

function grandTotal() {
    answer1 = total1()
    answer2 = total2()
    let grandanswer = answer1 + answer2
    output3.textContent = (`R${grandanswer.toFixed(2)}`)
}