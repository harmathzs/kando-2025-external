/** order.js - POST /order */
module.exports.handler = async (event) => {
    if (event.httpMethod != 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({message: 'Method Not Allowed'})
        }
    }

    console.log('/order event', event)

    // TODO - parse Outbound message SOAP XML

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({message: 'OK'})
    }
}