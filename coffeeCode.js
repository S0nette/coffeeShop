
const coffee = JSON.parse(localStorage.getItem('FutureOrder'));
console.log(coffee)

//чтение заказа
let order = []
!localStorage.order ? order = [] : order = JSON.parse(localStorage.getItem('order')); 
console.log(order)
const orderLenth = () => {
    let ordCnt = 0
    if (order.length>0) {
        order.forEach(cof => {
            if(cof!=null)  ordCnt += cof.count
    })}
    return ordCnt;
}

document.getElementById("coffeeName").innerHTML = coffee.name;
document.getElementById("cost").innerHTML = `₹${coffee.cost}`;
document.getElementById("orderCount").innerHTML = orderLenth();

const updateLocalStorage = () => {
    localStorage.setItem('order', JSON.stringify(order))
}

//визуализация выбора кнопки
const shortBtn = document.querySelector('.short');
const tallBtn = document.querySelector('.tall');
const grandBtn = document.querySelector('.grand');
const ventiBtn = document.querySelector('.venti');
const sugBtn = document.getElementById('shugar')
const milkBtn = document.getElementById('milk')
const oatBtn = document.getElementById('oat')
const soyBtn = document.getElementById('soy')
const almBtn = document.getElementById('almond')
let selectedBtns = [shortBtn, 0, 0]
shortBtn.addEventListener('click', () => {
    selectedBtns[0].classList.remove('chosen');
    selectedBtns[0].classList.add('noChosen'); 
    shortBtn.classList.remove('noChosen');
    shortBtn.classList.add('chosen');
    selectedBtns[0]= shortBtn
});
tallBtn.addEventListener('click', () => {
    selectedBtns[0].classList.remove('chosen');
    selectedBtns[0].classList.add('noChosen'); 
    tallBtn.classList.remove('noChosen');
    tallBtn.classList.add('chosen');
    selectedBtns[0]= tallBtn
});
grandBtn.addEventListener('click', () => {
    selectedBtns[0].classList.remove('chosen');
    selectedBtns[0].classList.add('noChosen'); 
    grandBtn.classList.remove('noChosen');
    grandBtn.classList.add('chosen');
    selectedBtns[0]= grandBtn
});
ventiBtn.addEventListener('click', () => {
    selectedBtns[0].classList.remove('chosen');
    selectedBtns[0].classList.add('noChosen'); 
    ventiBtn.classList.remove('noChosen');
    ventiBtn.classList.add('chosen');
    selectedBtns[0]= ventiBtn
});
sugBtn.addEventListener('click', () => {
    if (selectedBtns[1]!=0) {
        selectedBtns[1].classList.remove('chosen');
        selectedBtns[1].classList.add('noChosen'); 
    }
    sugBtn.classList.remove('noChosen');
    sugBtn.classList.add('chosen');
    selectedBtns[1] = sugBtn
});
milkBtn.addEventListener('click', () => {
    if (selectedBtns[1]!=0) {
        selectedBtns[1].classList.remove('chosen');
        selectedBtns[1].classList.add('noChosen'); 
    }
    milkBtn.classList.remove('noChosen');
    milkBtn.classList.add('chosen');
    selectedBtns[1] = milkBtn
});
oatBtn.addEventListener('click', () => {
    if (selectedBtns[2]!=0) {
        selectedBtns[2].classList.remove('chosen');
        selectedBtns[2].classList.add('noChosen'); 
    }
    oatBtn.classList.remove('noChosen');
    oatBtn.classList.add('chosen');
    selectedBtns[2] = oatBtn
});
soyBtn.addEventListener('click', () => {
    if (selectedBtns[2]!=0) {
        selectedBtns[2].classList.remove('chosen');
        selectedBtns[2].classList.add('noChosen'); 
    }
    soyBtn.classList.remove('noChosen');
    soyBtn.classList.add('chosen');
    selectedBtns[2] = soyBtn
});
almBtn.addEventListener('click', () => {
    if (selectedBtns[2]!=0) {
        selectedBtns[2].classList.remove('chosen');
        selectedBtns[2].classList.add('noChosen'); 
    }
    almBtn.classList.remove('noChosen');
    almBtn.classList.add('chosen');
    selectedBtns[2] = almBtn
});

let cost = 1;
document.getElementById('plus').addEventListener('click', () => {
    cost+=1;
    changeCost();
})
document.getElementById('min').addEventListener('click', () => {
    if (cost!=1) {
        cost-=1;
        changeCost();
    }
})
const changeCost = () => {
    document.getElementById('addCoffeeCount').innerHTML = cost
    document.getElementById('cost').innerHTML = `₹${cost * coffee.cost}`
}


document.querySelector('.placeOrd'). addEventListener('click', () => {
    console.log(coffee)
    if (order.indexOf(coffee)==-1){
        coffee.count = cost
        order.push(coffee)
    }
    else {
        order[order.indexOf(coffee)].count += cost
    }
    document.getElementById('orderCount').innerHTML = orderLenth()
    updateLocalStorage()
})

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


