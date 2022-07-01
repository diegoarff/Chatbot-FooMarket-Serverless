let { log, output } = require('../../utils/utils');
let connectDB = require('../../config/database');
let axios = require('axios');

const ENDPOINT_PRODUCTS = 'https://fakestoreapi.com/products/'

exports.handler = async (event, context) => {
    let {
        httpMethod: method
    } = event;

    const response = await axios.get(ENDPOINT_PRODUCTS);
    let item = response.data;

    let client = await connectDB();
    const colProducts = client.db().collection('products');
    const colCarts = client.db().collection('carts');

    if (method == 'GET') {
        try {
            let r = await colProducts.find({}).toArray();
            return output(r);
        } catch (err) {
            log(err);
        }
    }

    if (method == 'POST') {
        try {
            for(let i = 0; i < 20; i++){
                await colProducts.insertOne({
                    id: item[i].id,
                    name: item[i].title,
                    category: item[i].category,
                    price: item[i].price,
                    description: item[i].description,
                    image: item[i].image
                });
            }

            return output('agregados 20 productos')

        } catch (err) {
            log(err);
        }

    }

    if (method == 'DELETE') {
        try {
            await colCarts.deleteMany({});
            return output('borrado');
        } catch (err) {
            log(err);
        }
    }

};