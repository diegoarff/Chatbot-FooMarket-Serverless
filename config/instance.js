let axios = require('axios');

const API_DB = axios.create({
    baseURL: 'http://localhost:8888',
    timeout: 10000,
    headers: {'X-Custom-header': 'foobar'}
})

const ENDPOINTS_PRODUCTS = {
    GET_PRODUCTS: '/getProducts',
    GET_PRODUCTS_CATEGORY: '/getProductsByCategory'
}

const ENDPOINTS_CARTS = {
    GET_CART: '/getCart',
    PUT_PRODUCTS_CART: '/putProductsCart',
    POST_CART: '/postCart',
    PUT_USER_DETAILS: '/putUserDetails',
    PUT_TOTAL_AMOUNT: '/putTotalAmount',
    DELETE_CART: '/deleteCart' 
}

module.exports = {
    API_DB,
    ENDPOINTS_PRODUCTS,
    ENDPOINTS_CARTS
}


