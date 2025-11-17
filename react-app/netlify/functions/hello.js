/** hello.js - GET /hello */
exports.handler = (event) => {
    console.log('/hello event', event)

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify('Hello Lajos')
    }
}