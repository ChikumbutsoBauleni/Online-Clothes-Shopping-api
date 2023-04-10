//importing the express and the app
const express = require('express')
const app = express()

const post = require('./src/posts/post.model')

//displayig user 1 on the browser
app. get('/api/v1', function(req, res) {
    return res.json(req.headers)
})

//displaying user 2 on the browser
app.get('/api/v1/posts', function(req, res){
    return res.json([post])
})

//make the api listen the port number 3000
app.listen(3000, function(){
    console.log('Online clothes shopping api listening port 3000')
})