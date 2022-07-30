const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeople = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

let numPeople = numberOfPeople.innerText

const calculateBill = () => {
  let billTotal = Number(billTotalInput.value)
  let tipPercentage = Number(tipInput.value) / 100
  tipAmount = billTotal * tipPercentage
  totalBillTip = tipAmount + billTotal
  totalPerson = totalBillTip / numPeople
  perPersonTotal.innerText = `$${totalPerson.toFixed(2)}`
}

const increasePeople = () => {
  numPeople++
  numberOfPeople.innerText = numPeople
  calculateBill()
}

const decreasePeople = () => {
  if (numPeople == 1) {
    return
  }
  numPeople--
  numberOfPeople.innerText = numPeople
  calculateBill()
}