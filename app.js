let cheese = 0;

let clickupgrades = [
    {
        name: `pickaxe`,
        price: 50,
        quantity: 0,
        bonus: 2



    },
    {
        name: `shovel`,
        price: 100,
        quantity: 0,
        bonus: 5
    }
];

let automaticupgrades = [
    {
        name: `drill`,
        price: 500,
        quantity: 0,
        bonus: 20
    },
    {
        name: `mini-x`,
        price: 1000,
        quantity: 0,
        bonus: 50
    }
]


function mine() {
    cheese += 1
    console.log(`cheese`, cheese)
    drawminestates()

}
function drawminestates() {
    const mineelm = document.
        getElementById(`mine`)
    console.log(`got the mine elm`, mineelm)
    mineelm.innerHTML = cheese
}
drawminestates()
document.getElementById(`mine`);

function purchasclicableitem(pickaxe) {
    const foundclickableitems = clickableitems.find(clickableitems => clickableitems.name == clickableItems)

    if (cheese < foundclickableitems.price) {
        window.alert(`you cant afford the ${foundclickableitem.name}!`)

    }

}
function puchaspickaxe() {
    pickaxe.quantity += 1
    console.log(`puchasepickaxe`, puchaspickaxe)

}















