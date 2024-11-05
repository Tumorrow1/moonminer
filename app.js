let cheese = 0;

let clickupgrades = [
    {
        name: `pickaxe`,
        price: 5,
        quantity: 0,
        bonus: 2



    },
    {
        name: `shovel`,
        price: 10,
        quantity: 0,
        bonus: 5
    }
];

let automaticupgrades = [
    {
        name: `drill`,
        price: 50,
        quantity: 0,
        bonus: 20
    },
    {
        name: `mini-x`,
        price: 100,
        quantity: 0,
        bonus: 50
    }
]
setInterval(() => {
    let bonus = 0;

    automaticupgrades.forEach(upgrade => {
        bonus += upgrade.bonus * upgrade.quantity
    })

    cheese += bonus;

    console.log(`cheese`, cheese)
    drawminestates()



}, 3000)

function mine() {
    let bonus = 1;

    clickupgrades.forEach(upgrade => {
        bonus += upgrade.bonus * upgrade.quantity
    })

    cheese += bonus;

    console.log(`cheese`, cheese)
    drawminestates()

}
function drawminestates() {
    const mineelm = document.
        getElementById(`mine`)
    console.log(`got the mine elm`, mineelm)
    mineelm.innerHTML = cheese.toString()
}
drawminestates()
document.getElementById(`mine`);

function purchasclicableitem(clickableupgrade) {
    let foundclickableitem = clickupgrades.find(clickableitems => clickableitems.name == clickableupgrade)
    if (!foundclickableitem) { foundclickableitem = automaticupgrades.find(clickableitems => clickableitems.name == clickableupgrade) }
    if (cheese < foundclickableitem.price) {
        window.alert(`you cant afford the ${foundclickableitem.name}!`)
        return

    }
    console.log('purchased', foundclickableitem.name);

    cheese -= foundclickableitem.price
    foundclickableitem.quantity++
    foundclickableitem.price = Math.ceil(foundclickableitem.price *= 1.5)
    document.getElementById(`${foundclickableitem.name}-price`).innerText = foundclickableitem.price.toString()
    document.getElementById(`${foundclickableitem.name}-count`).innerText = foundclickableitem.quantity.toString()

    drawminestates()
}


function drawUpgradeQuantities() {
    // TODO this needs to loop through upgrades/autoUpgrades and draw each upgrades quantity to the page
}

function calculateClickBonus() {
    // TODO reference store-front/ spooky store
}

function calculateAutoBonus() {

}










