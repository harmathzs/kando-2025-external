/** hello.js - GET /hello */
module.exports.handler = async (event) => {
    console.log('/hello event', event)

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({message: 'OK'})
    }
}