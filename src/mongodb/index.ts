import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    items: [{
        name: String,
        description: String,
    }]
}, { strict: false })

const ProductModel = mongoose.model("products", productSchema)

ProductModel.create({
    name: 'shampoo',
    description: 'cabelos lindos',
    cor: 'vermelho'
})

async function main() {
    const mongoURI = 'mongodb://localhost:27017/db_basics'
    await mongoose.connect(mongoURI)

    console.log('mongodb conectado')
}

await main()

const products = await ProductModel.find()
console.log(products)

