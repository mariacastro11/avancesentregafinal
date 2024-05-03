
class Shoe {

    constructor(id, name, price, color, description, img){

        this.id = id
        this.name = name
        this.price = price
        this.color = color
        this.description = description
        this.img = img

    }

    createHtml(pos) {

        return `

        <div class="producto">

                <div class="img-container">

                    <img src="${this.img}" alt="img-producto" class="img-producto">

                </div>

                <div class="elementos-produc"> 

                    <div class="texto-producto">
        
                        <h2 onclick="seeDetail(${pos})" >${this.price}</h2>  
        
                        <a href="#" class="nombre-produc" onclick="seeDetail(${pos});">${this.name}</a>

                    </div>

                    <span class="material-symbols-outlined" id="favorito">
                        favorite
                    </span>

                </div>
    
            </div>
        
        `
    }

}