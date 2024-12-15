

class ProductManager {
    static ultID = 0
    constructor() {
        this.products = []
    }

    addProduct(title, description, price, img, code, stock){
        if(!title || !description || !price || !img || !code || !stock){
            console.log("Todos los campos son obligatorios");
            return
        }
        
        if(this.products.some(item => item.code === code)){
            console.log("El codigo debe ser unico para cada producto");
            return
        }
        
        const newProduct = {
            id: ++ProductManager.ultID,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct)
    }

    getProducts(){
        return this.products
    }

    getProductsId(id){
        const product = this.products.find(item => item.id === id)

        if(!product){
            console.error("Not found");
        }else{
            console.log(product);
        }
    }
}

const manager = new ProductManager()

console.log(manager.getProducts());

manager.addProduct("Producto", "descripcion", 249, "Sin imagen", "ab12", 24)
manager.addProduct("Producto2", "descripcion2", 249, "Sin imagen", "ab13", 245)
manager.addProduct("Producto3", "descripcion3", 249, "Sin imagen", "ab124", 222)

console.log(manager.getProducts());
