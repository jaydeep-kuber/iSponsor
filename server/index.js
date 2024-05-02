require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()


const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


const conn = require('./db')

const userRouter = require('./routes/user')
const sponsorRouter = require('./routes/sponsorRouter')
const loginAuth =  require('./routes/LoginAuthRout')
const Register = require('./routes/RegisterAuth')
const userReg = require('./routes/userReg')

const { logReqRes } = require('./middleware')

// connection with database
conn.connctiontoMongo('mongodb://localhost:27017/iSponsor') 

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes('log.txt'))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// routes

// //---- import all routers from routers folder------
// var normalizedPath = require("path").join(__dirname, "routes");

// require("fs").readdirSync(normalizedPath).forEach(function(file) {
//   console.log(file);  
//   let files = require("./routes/" + file);
//   app.use(files);
// });

//-------------------------------------------------

app.use('/api/user', userRouter)
app.use('/api/sponsor', sponsorRouter)

// login auth
app.use('/api/login', loginAuth)
app.use('/api/register',Register )
// app.use('/api/reg', userReg)

// login auth 
const loginAuthRouter = require('./routes/LoginAuthRout')
app.use('/api/auth', loginAuthRouter)


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))