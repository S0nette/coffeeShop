const cappuccino = [
    {
        "name":"Cinnamon and Cocoa",
        "image":"images/cocoa.png",
        "orderImage":"images/cocoaOrd.png",
        "cost":"99"
    },
    {
        "name":"Drizzled with Caramel",
        "image":"images/caramel.png",
        "orderImage":"images/caramelOrd.png",
        "cost":"99"
    },
    {
        "name":"Bursting Blueberry",
        "image":"images/blueberry.png",
        "orderImage":"images/blueberryOrd.png",
        "cost":"99"
    },
    {
        "name":"Dalgona Macha",
        "image":"images/matcha.png",
        "orderImage":"images/matchaOrd.png",
        "cost":"99"
    },
    {
        "name":"Whipped chocolate",
        "image":"images/artCoffee.png",
        "orderImage":"images/chocolateOrd.png",
        "cost":"99"
    },
    {
        "name":"Coco & Vanilla Cream",
        "image":"images/vanilla.png",
        "orderImage":"images/vanillaOrd.png",
        "cost":"99"
    }
]
const latte = []
const americano = []
const expresso = []
const flatWhite = []

const coffeTypes = [cappuccino, latte, americano, expresso, flatWhite]

let order = []
let ordCnt = order.length
if(ordCnt!=0) {
    document.getElementById("orderCount").innerHTML = ordCnt;
}

let orderMenu = document.querySelector('.orderMenu')
const orderStatus = document.querySelector('.orderStatus')
orderStatus.addEventListener('click', () => {
    orderMenu.classList.add('open')
    orderMenu.classList.remove('close')
})

let popup_cancel = document.querySelector('.popupCancel')
popup_cancel.addEventListener('click', () => {
    orderMenu.classList.add('close')
    orderMenu.classList.remove('open')
})

let s = ''
const selCap = document.getElementById('cappuccino');
const selLat = document.getElementById('latte');
const selAm = document.getElementById('americano');
const selExp = document.getElementById('expresso');
const selFW = document.getElementById('flatWhite');

const coffeeList = document.querySelector('.drinks');
let activeCof = selCap

let id = 0
cappuccino.forEach(coffee => {
    const coffeeBlock = document.createElement('div');
    coffeeBlock.className = 'drink';
    coffeeBlock.tabIndex = "0";
    coffeeBlock.innerHTML = `
            <img src=${coffee.image}>`
    const coffeeName = document.createElement('a');
    coffeeName.href = "coffee.html"
    coffeeName.innerHTML = `${coffee.name}`
    coffeeName.addEventListener('click', () => {
        coffeeLink(coffee.name)
    })
    console.log(coffeeName)
    const costBlock = document.createElement('div');
    costBlock.className = 'cost';
    costBlock.innerHTML = `
            <p>₹${coffee.cost}</p>`
    const addButton = document.createElement('button');
    addButton.textContent = `+`
    addButton.className = 'addToOrder';
    addButton.addEventListener('click', () => addToOrder(cappuccino[id]));
    
    coffeeBlock.appendChild(coffeeName);
    costBlock.appendChild(addButton);
    coffeeBlock.appendChild(costBlock);
    coffeeList.appendChild(coffeeBlock);
    id += 1;
});

selCap.addEventListener('click', () => {
    if (activeCof!=0) {
        activeCof.classList.remove('active');
        activeCof.classList.add('noActive'); 
    }
    selCap.classList.remove('noActive');
    selCap.classList.add('active');
    activeCof = selCap
    showCoffee('cappuccino');
});

selAm.addEventListener('click', () => {
    if (activeCof!=0) {
        activeCof.classList.remove('active');
        activeCof.classList.add('noActive'); 
    }
    selAm.classList.remove('noActive'); 
    selAm.classList.add('active');
    activeCof = selAm
    showCoffee('americano');
});

selExp.addEventListener('click', () => {
    if (activeCof!=0) {
        activeCof.classList.remove('active');
        activeCof.classList.add('noActive'); 
    }
    selExp.classList.remove('noActive');
    selExp.classList.add('active');
    activeCof = selExp
    showCoffee('expresso');
});

selFW.addEventListener('click', () => {
    if (activeCof!=0) {
        activeCof.classList.remove('active');
        activeCof.classList.add('noActive'); 
    }
    selFW.classList.remove('noActive');
    selFW.classList.add('active');
    activeCof = selFW
    showCoffee('flatWhite');
});

selLat.addEventListener('click', () => {
    if (activeCof!=0) {
        activeCof.classList.remove('active');
        activeCof.classList.add('noActive'); 
    }
    selLat.classList.remove('noActive');
    selLat.classList.add('active');
    activeCof = selLat
    showCoffee('latte');
});


const showCoffee = (filter) => {
    coffeeList.innerHTML=``

    let filteredCoffee = cappuccino
    if(filter === 'latte') {   filteredCoffee = latte  }
    else if(filter === 'americano') {   filteredCoffee = americano    }
    else if(filter === 'expresso') {    filteredCoffee = expresso      }
    else if(filter === 'flatWhite') {   filteredCoffee = flatWhite    }
    id = 0;
    filteredCoffee.forEach(coffee => {
        const coffeeBlock = document.createElement('div');
        coffeeBlock.className = 'drink';
        coffeeBlock.tabIndex = "0";
        coffeeBlock.innerHTML = `
                <img src=${coffee.image}>
                <p>${coffee.name}</p>`
        const costBlock = document.createElement('div');
        costBlock.className = 'cost';
        costBlock.innerHTML = `
                <p>₹${coffee.cost}</p>`
        const addButton = document.createElement('button');
        addButton.textContent = `+`
        addButton.className = 'addToOrder';
        addButton.addEventListener('click', () => addToOrder(filteredCoffee[id]));
        
        costBlock.appendChild(addButton);
        coffeeBlock.appendChild(costBlock);
        coffeeList.appendChild(coffeeBlock);
        id += 1;
    });
    console.log(s)
};

const findCoffee = (filter) => {
    coffeeList.innerHTML=``
    coffeTypes.forEach(coffeeType => {
        id=0
        coffeeType.forEach(coffee => {
            if (coffee.name.toLowerCase().includes(filter)) {
                const coffeeBlock = document.createElement('div');
                coffeeBlock.className = 'drink';
                coffeeBlock.tabIndex = "0";
                coffeeBlock.innerHTML = `
                        <img src=${coffee.image}>
                        <p>${coffee.name}</p>`
                const costBlock = document.createElement('div');
                costBlock.className = 'cost';
                costBlock.innerHTML = `
                        <p>₹${coffee.cost}</p>`
                const addButton = document.createElement('button');
                addButton.textContent = `+`
                addButton.className = 'addToOrder';
                addButton.addEventListener('click', () => addToOrder(coffeeType[id]));
                
                costBlock.appendChild(addButton);
                coffeeBlock.appendChild(costBlock);
                coffeeList.appendChild(coffeeBlock);
            }
            id+=1
        })
    });
};


const addToOrder = (coffee) => {
    order.push(coffee);
    ordCnt += 1;
    document.getElementById("orderCount").innerHTML = ordCnt;
}



let searchInp = document.getElementById("searchInput")
let searchBtn = document.getElementById("search")
searchBtn.addEventListener('click', () => {
    let srch = searchInp.value.toLowerCase()
    findCoffee(srch)
    activeCof.classList.remove('active');
    activeCof.classList.add('noActive');
    activeCof = 0
})


function coffeeLink(coffee) {
    document.location = "coffee.html"
    document.getElementById("orderCount2").innerHTML = ordCnt;
    document.getElementById("coffeeName0").innerHTML = coffee;
}

