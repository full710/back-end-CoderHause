
class ProductManager {
    static products = []
    static id = 1;

    static addProduct(product){
        const nextProductAdd = ProductManager.products.find(p => p.code === product.code)
        if(!nextProductAdd){
            product.id = ProductManager.id;
            ProductManager.products.push(product)
            ProductManager.id++
        }
        else{
            console.log("El producto ya esta agregado");
        }
    }
    static getProducts(){
        return ProductManager.products
    }
    static getProductsById(id){
        const product = ProductManager.products.find(p => p.id === id)
        if(product){
            console.log(product);     
        }else{
            console.log("not found");
        }
    }
}

class Product{
    constructor(title,desciption,price,thumbnail,code,stock,){
        this.title = title
        this.desciption = desciption
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}

const product1 = new Product("Termo", "termo para mate",250, "",3214512,4)
const product2 = new Product("Taza", "Taza para café",150, "", 654321, 10)
const product3 = new Product("Taza", "Taza para café",150, "", 654321, 10)

ProductManager.addProduct(product1)
ProductManager.addProduct(product2)
ProductManager.addProduct(product3)

console.log(ProductManager.getProducts());
ProductManager.getProductsById(1)
ProductManager.getProductsById(2)
ProductManager.getProductsById(3)