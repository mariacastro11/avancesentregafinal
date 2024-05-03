let container = document.getElementById("productos")
let listOfShoes = []


function enableView() {

    container.innerHTML = ""
    for(let i = 0; i < listOfShoes.length; i++) {
        const shoe = listOfShoes[i]
        container.innerHTML += shoe.createHtml(i)
    }

    
}

function getShoeData() {

    for(let i = 0; i < shoes.length; i++) {
        const obj = shoes[i]
        const shoe = new Shoe(obj.id, obj.name, obj.price, obj.color, obj.description, obj.img)
        listOfShoes.push(shoe)
    }

    
}

function seeDetail(position) {
    
    const shoeToUse = listOfShoes[position]
    window.location.href = "./product.html?id="+shoeToUse.id+"&name="+shoeToUse.name


}

function createView() {
    getShoeData()
    enableView()
}

createView() 

