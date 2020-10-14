const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = []

getRandomUser()
getRandomUser()
getRandomUser()
getRandomUser()



//fetching the API and adding money

async function getRandomUser(){

   const res = await fetch("https://randomuser.me/api")

   const data = await res.json()

  

    const user = data.results[0]

    const newUser = {
        name : `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000)
    }

    addData(newUser)
}

let calculateWealth = () =>{
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthElement = document.createElement('div');
  wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthElement);
}


let  showMillionaires= () =>{
  data = data.filter(user => user.money >= 1000000);

  updateDOM();
}




let sortRichest = () => {
    data.sort((a,b) => b.money - a.money)
    updateDOM()
}







let doubleMoney = () =>{

    data= data.map((user)=>{
        return { ...user, money: user.money*2}
    }) 

    updateDOM()
}

// add new obj to data array

let addData = (obj) => {

    data.push(obj)

    updateDOM()
}



let updateDOM = ( providedData = data ) =>{

    // clear the main div

    main.innerHTML = ` <h2><strong>Person</strong> Wealth</h2>`

    providedData.forEach( item => {

        const element = document.createElement('div') // literally creating an HTML element

        element.classList.add('person') //adding "person" as a class onto this

        element.innerHTML =  `<strong> ${item.name} </strong>
        ${formatMoney(item.money)}`

        main.appendChild(element)
    })

}



// format no. as money

let formatMoney = ( number ) =>'$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');


// event listeners

addUserBtn.addEventListener("click", getRandomUser)

doubleBtn.addEventListener("click", doubleMoney)

sortBtn.addEventListener("click", sortRichest)

showMillionairesBtn.addEventListener("click", showMillionaires)

calculateWealthBtn.addEventListener("click", calculateWealth)
