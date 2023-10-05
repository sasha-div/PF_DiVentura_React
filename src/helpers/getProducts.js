import data from '../data/data.json';

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}

export default getProducts;

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((element) => element.id === id);

        item ? resolve(item) : reject({ error: "No se encontró el producto :(" });

    })
}