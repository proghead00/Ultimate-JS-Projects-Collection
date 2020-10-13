const currencyElement_one = document.getElementById('currency-one')

const currencyElement_two = document.getElementById('currency-two')


const amountElement_one = document.getElementById('amount-one')

const amountElement_two = document.getElementById('amount-two')

const rateElement = document.getElementById('rate')

const swap = document.getElementById('swap')


// fetch exchange rates + DOM updates

const calculate = (()=>{

const currency_one = currencyElement_one.value
const currency_two = currencyElement_two.value

fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res=> res.json())
    .then(data => {
       
        
        const rate = data.rates[currency_two]; //providing the index for the rate

        rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
        
        amountElement_two.value = (amountElement_one.value * rate).toFixed(2) //2 deciaml pts
    
        
    
    
    
    })
})



// event listeners

currencyElement_one.addEventListener("change", calculate)

amountElement_one.addEventListener("input", calculate)

currencyElement_two.addEventListener("change", calculate)

amountElement_one.addEventListener("input", calculate)

swap.addEventListener('click', ()=>{
    const temp = currencyElement_one.value
    currencyElement_one.value = currencyElement_two.value
    currencyElement_two.value = temp
    calculate()

})
calculate()
