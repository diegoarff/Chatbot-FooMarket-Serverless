let connectDB = require('../../config/database');
let { output, log } = require('../../utils/utils');

exports.handler = async (event) => {

    let {
        httpMethod: method,
        queryStringParameters:p
    } = event;

    let client = await connectDB();
    const colCarts = client.db().collection('carts');

    if(method == 'GET') {

        let {userId} = p;

        userId = Number(userId);

        try {
            let res = await colCarts.find({user_id: userId}).toArray();
            return output(res);

        } catch (err) {
            log(err);
        }
    }

};
