const express = ('express')

const post = require('./src/posts/post.model')


app. get('/api/v1', function(req, res) {
    return res.json(req, res)
})

app.get('/api/v1/posts', function(req, res){
    return res.json([post])
})


app.listern(3000, function(){
    console.log('Online clothes shopping api listening port 3000')
})