const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.set('view engine','ejs')
app.use("/static",express.static('public'))
app.use("/static",express.static("upload"))
app.use(bodyparser.urlencoded({extended:true}))
const router=  require('./src/routes/route.js')
const session = require('express-session')
const cookie=require('cookie-parser')

app.use(
    session({
       
        secret:'iamdevagooddev',
        resave:false,
        saveUninitialized:false,
        cookie:{
              maxAge:2000000000
        }
    })
 )
 
// ifhwiahfiwa







app.use('/',router)
app.listen(9999,()=>{
    console.log('★★★★★★ 9999 ★★★★★★')
})