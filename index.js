class Order {
    constructor(sweetOrder, beverageOrder) {
        this.sweetOrder = sweetOrder;
        this.beverageOrder = beverageOrder;
    }

    displaySweetOrder(sweet) {
        sweetOrderElement.innerText = sweet;
    }

    displayBeverageOrder(beverage) {
        beverageOrderElement.innerText = beverage;
    }
}

var sweetsArray = document.querySelectorAll(".sweets");

sweetsArray.forEach((sweet) => {
    sweet.addEventListener("click", () => {
        console.log(sweet.innerText);
        order.displaySweetOrder(sweet.innerText);
    })
})

var beveragesArray = document.querySelectorAll(".beverages");

beveragesArray.forEach((beverage) => {
    beverage.addEventListener("click", function() {
        console.log(beverage.innerText);
        order.displayBeverageOrder(beverage.innerText);
    })
})

var sweetOrderElement = document.querySelector(".swt-ord");
var beverageOrderElement = document.querySelector(".bvr-ord");

var order = new Order(sweetOrderElement, beverageOrderElement)