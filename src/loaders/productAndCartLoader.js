import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {

    // get products
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    //get cart data
    const storedCart = getStoredCart()
        const savedCart = [];

        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

    return {products, savedCart}
}