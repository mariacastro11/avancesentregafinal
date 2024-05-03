const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')

console.log(idFromUrl)

function searchShoe(){

    let shoe = null
    for(let i = 0; i < shoes.length; i++) {
        const obj = shoes[i]
        if(obj.id == idFromUrl) {
            shoe = new Shoe(obj.id, obj.name, obj.price, obj.color, obj.description, obj.img)
        }
    }
    return shoe

}

function createView() {

    const shoe = searchShoe()

    if(shoe) {

        const id = document.getElementById("id")
        const name = document.getElementById("name")
        const price =  document.getElementById("price")
        const color = document.getElementById("color")
        const description = document.getElementById("description")
        const img = document.getElementById("product-img")
        
        id.innerHTML = "REF." + shoe.id
        name.innerHTML = shoe.name
        price.innerHTML = shoe.price
        color.innerHTML = "Color " + shoe.color
        description.innerHTML = shoe.description
        img.src = shoe.img 

    } else {

        alert("No hay coincidencias para el usuario: " + idFromUrl)

    }
}

createView()