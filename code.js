//задание списков кофе
const cappuccino = [
    {
        "name":"Cinnamon and Cocoa",
        "image":"images/cocoa.png",
        "orderImage":"images/cocoaOrd.png",
        "cost":"99",
        "count":"0"
    },
    {
        "name":"Drizzled with Caramel",
        "image":"images/caramel.png",
        "orderImage":"images/caramelOrd.png",
        "cost":"99",
        "count":"0"
    },
    {
        "name":"Bursting Blueberry",
        "image":"images/blueberry.png",
        "orderImage":"images/blueberryOrd.png",
        "cost":"99",
        "count":"0"
    },
    {
        "name":"Dalgona Macha",
        "image":"images/matcha.png",
        "orderImage":"images/mathcaOrd.png",
        "cost":"99",
        "count":"0"
    },
    {
        "name":"Whipped chocolate",
        "image":"images/artCoffee.png",
        "orderImage":"images/chocolateOrd.png",
        "cost":"99",
        "count":"0"
    },
    {
        "name":"Coco & Vanilla Cream",
        "image":"images/vanilla.png",
        "orderImage":"images/vanillaOrd.png",
        "cost":"99",
        "count":"0"
    }
]
const latte = [{
    "name":"Latte with siryp",
    "image":"images/cocoa.png",
    "orderImage":"images/cocoaOrd.png",
    "cost":"99",
    "count":"0"
}]
const americano = [{
    "name":"Dark Coffee",
    "image":"images/vanilla.png",
    "orderImage":"images/vanillaOrd.png",
    "cost":"99",
    "count":"0"
}]
const expresso = [{
    "name":"Italian Expresso",
    "image":"images/artCoffee.png",
    "orderImage":"images/chocolateOrd.png",
    "cost":"99",
    "count":"0"
}]
const flatWhite = [{
    "name":"Coffee with Ice Cream",
    "image":"images/blueberry.png",
    "orderImage":"images/blueberryOrd.png",
    "cost":"99",
    "count":"0"
},]
const cacao = [{
    "name":"Cocoa",
    "image":"images/cocoa.png",
    "orderImage":"images/cocoaOrd.png",
    "cost":"99",
    "count":"0"
}]
const matcha = [{
    "name":"Macha",
    "image":"images/matcha.png",
    "orderImage":"images/matchaOrd.png",
    "cost":"99",
    "count":"0"
}]


//список типов кофе
const coffeTypes = [cappuccino, latte, americano, expresso, flatWhite, cacao, matcha]


let order = []
!localStorage.order ? order = [] : order = JSON.parse(localStorage.getItem('order')); 
const orderLenth = () => {
    let ordCnt = 0
    console.log(ordCnt)
    if (order.length>0) {
        order.forEach(cof => {
            ordCnt += cof.count
    })}
    return ordCnt;
}
document.getElementById("orderCount").innerHTML = orderLenth();


const updateLocalStorage = () => {
    localStorage.setItem('order', JSON.stringify(order))
}


//всплывающее окно с состоянием заказа
let orderMenu = document.querySelector('.orderMenu')
const orderStatus = document.querySelector('.orderStatus')
orderStatus.addEventListener('click', () => {
    orderMenu.classList.add('open')
    orderMenu.classList.remove('close')
    findTotalCost()
    showOrder()
})
let popup_cancel = document.querySelector('.popupCancel')
popup_cancel.addEventListener('click', () => {
    orderMenu.classList.add('close')
    orderMenu.classList.remove('open')
})
const findTotalCost = () => {
    console.log(order)
    let sub = 0
    order.forEach(cof => {
        sub += cof.cost*cof.count
    })
    let disc = (sub * 0.1).toFixed(2)
    let total = sub - disc
    document.getElementById('totalCost').innerHTML = `
    <div class="findCost">
        <p>Subtotal</p>
        <p>₹${sub}</p>
    </div>
    <div class="findCost">
        <p>Discount -10%</p>
        <p>₹${disc}</p>
    </div>
    <div class="findCost">
        <h3>Total</h3>
        <h3>₹${total}</h3>     
    </div>`
}
const showOrder = () => {
    let totCost = document.getElementById('ordered')
    totCost.innerHTML = '<h3>Ordered</h3>'
    order.forEach(coffee => {
        totCost.innerHTML += `
        <div class="findCost">
            <img src=${coffee.orderImage}>
            <p>${coffee.name}  x${coffee.count}</p>
        </div>`
    })
}




//изменение визуала каталоге с типами кофе
const selCap = document.getElementById('cappuccino');
const selLat = document.getElementById('latte');
const selAm = document.getElementById('americano');
const selExp = document.getElementById('expresso');
const selFW = document.getElementById('flatWhite');
const selMa = document.getElementById('matcha');
const selCao = document.getElementById('cacao');
const selTypes = [selCap, selLat, selAm, selExp, selFW, selCao, selMa]
let activeCof = selCap
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
selMa.addEventListener('click', () => {
    if (activeCof!=0) {
        activeCof.classList.remove('active');
        activeCof.classList.add('noActive'); 
    }
    selMa.classList.remove('noActive');
    selMa.classList.add('active');
    activeCof = selMa
    showCoffee('matcha');
});
selCao.addEventListener('click', () => {
    if (activeCof!=0) {
        activeCof.classList.remove('active');
        activeCof.classList.add('noActive'); 
    }
    selCao.classList.remove('noActive');
    selCao.classList.add('active');
    activeCof = selCao
    showCoffee('cacao');
});

//перелистывание списка с типами кофе
const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
let selId = 0;
upBtn.addEventListener('click', () => {
    if (selId!=0) {
        selId -= 1
        selTypes[selId].classList.remove('close')
        selTypes[selId+5].classList.add('close')
    }
})
downBtn.addEventListener('click', () => {
    if (selId!=2) {
        selTypes[selId].classList.add('close')
        selTypes[selId+5].classList.remove('close')
        selId += 1
    }
})

//список напитков, отображающийся на экране
const coffeeList = document.querySelector('.drinks');

//вывод списка определённого типа кофе
const showCoffee = (filter) => {
    coffeeList.innerHTML=``

    let filteredCoffee = cappuccino
    if(filter === 'latte') {   filteredCoffee = latte  }
    else if(filter === 'americano') {   filteredCoffee = americano    }
    else if(filter === 'expresso') {    filteredCoffee = expresso      }
    else if(filter === 'flatWhite') {   filteredCoffee = flatWhite    }
    else if(filter === 'matcha') {   filteredCoffee = matcha    }
    else if(filter === 'cacao') {   filteredCoffee = cacao    }
    id = 0;
    filteredCoffee.forEach(coffee => {
        const coffeeBlock = document.createElement('div');
        coffeeBlock.className = 'drink';
        coffeeBlock.tabIndex = "0";
        coffeeBlock.innerHTML = `
                <img src=${coffee.image}>`
        const coffeeName = document.createElement('a');
        coffeeName.href = "coffee.html"
        coffeeName.innerHTML = `${coffee.name}`
        coffeeName.addEventListener('click', () => {
            addToOrder(coffee)
        })
        console.log(coffeeName)
        const costBlock = document.createElement('div');
        costBlock.className = 'cost';
        costBlock.innerHTML = `
                <p>₹${coffee.cost}</p>`
        const addButton = document.createElement('button');
        addButton.textContent = `+`
        addButton.className = 'addToOrder';
        addButton.addEventListener('click', () => addToOrder(coffee));
        
        coffeeBlock.appendChild(coffeeName);
        costBlock.appendChild(addButton);
        coffeeBlock.appendChild(costBlock);
        coffeeList.appendChild(coffeeBlock);
        id += 1;
    });
};
//при открытии окна отображается список cappuccino
showCoffee('cappuccino')

//добавление в список заказа
const addToOrder = (coffee) => {
    console.log(JSON.stringify({coffee}))
    localStorage.setItem('FutureOrder', JSON.stringify(coffee));
    window.open("coffee.html","_self")
}

//реализация поиска
let searchInp = document.getElementById("searchInput")
let searchBtn = document.getElementById("search")
searchBtn.addEventListener('click', () => {
    let srch = searchInp.value.toLowerCase()
    findCoffee(srch)
    activeCof.classList.remove('active');
    activeCof.classList.add('noActive');
    activeCof = 0
    activeCofBrg = 0
})
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

const menu = document.getElementById('menu')
const BurgerMenu = () => {
    menu.classList.remove('close')
    menu.classList.add('openBrg')
    if (activeCofBrg != 0) activeCofBrg.classList.add('activeBrg')
}

const selCapBrg = document.getElementById('capBrg');
const selLatBrg = document.getElementById('latBrg');
const selAmBrg = document.getElementById('amBrg');
const selExpBrg = document.getElementById('expBrg');
const selFWBrg = document.getElementById('fwBrg');
const selCaoBrg = document.getElementById('caoBtg');
const selMaBrg = document.getElementById('matchaBrg');
let activeCofBrg = selCapBrg
selCapBrg.addEventListener('click', () => {
    if (activeCofBrg!=0) {
        activeCofBrg.classList.remove('activeBrg');
        activeCofBrg.classList.add('noActiveBrg'); 
    }
    activeCofBrg = selCapBrg
    selCap.click()
    menu.classList.add('close')
    menu.classList.remove('openBrg')
});
selAmBrg.addEventListener('click', () => {
    if (activeCofBrg!=0) {
        activeCofBrg.classList.remove('activeBrg');
        activeCofBrg.classList.add('noActiveBrg'); 
    }
    activeCofBrg = selAmBrg
    selAm.click()
    menu.classList.add('close')
    menu.classList.remove('openBrg')
});
selExpBrg.addEventListener('click', () => {
    if (activeCofBrg!=0) {
        activeCofBrg.classList.remove('activeBrg');
        activeCofBrg.classList.add('noActiveBrg'); 
    }
    activeCofBrg = selExpBrg
    selExp.click()
    menu.classList.add('close')
    menu.classList.remove('openBrg')
});
selFWBrg.addEventListener('click', () => {
    if (activeCofBrg!=0) {
        activeCofBrg.classList.remove('activeBrg');
        activeCofBrg.classList.add('noActiveBrg'); 
    }
    activeCofBrg = selFWBrg
    selFW.click()
    menu.classList.add('close')
    menu.classList.remove('openBrg')
});
selLatBrg.addEventListener('click', () => {
    if (activeCofBrg!=0) {
        activeCofBrg.classList.remove('activeBrg');
        activeCofBrg.classList.add('noActiveBrg'); 
    }
    activeCofBrg = selLatBrg
    selLat.click()
    menu.classList.add('close')
    menu.classList.remove('openBrg')
});
selMaBrg.addEventListener('click', () => {
    if (activeCofBrg!=0) {
        activeCofBrg.classList.remove('activeBrg');
        activeCofBrg.classList.add('noActiveBrg'); 
    }
    activeCofBrg = selMaBrg
    selMa.click()
    menu.classList.add('close')
    menu.classList.remove('openBrg')
});
selCaoBrg.addEventListener('click', () => {
    if (activeCofBrg!=0) {
        activeCofBrg.classList.remove('activeBrg');
        activeCofBrg.classList.add('noActiveBrg'); 
    }
    activeCofBrg = selCaoBrg
    selCao.click()
    menu.classList.add('close')
    menu.classList.remove('openBrg')
});

