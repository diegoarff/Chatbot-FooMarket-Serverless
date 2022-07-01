let connectDB = require('../../config/database');
let { output } = require('../../utils/utils');

exports.handler = async (event) => {

    let {
        httpMethod: method,
        queryStringParameters:p
    } = event;

    //Se conecta a la colección de carritos
    let client = await connectDB();
    const colCarts = client.db().collection('carts');

    if(method == 'PUT') {

        let {userId} = p;
        userId = Number(userId);

        let {total} = p;
        total = Number(total);

        try {
            let res = await colCarts.updateOne({user_id: userId}, {$set:{total_amount: total}});
            return output(res);
        } catch (err) {
            output(err)
        }
    }
}
