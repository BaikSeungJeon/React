const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const {auth} = require('./middleware/auth')
const {User} = require('./models/User');

// application/x-www-form-urlencoded 분석해서 가지고 오게끔
app.use(bodyParser.urlencoded({extended: true}));
// application/json을 분석해서 가지고 오게끔 
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))
    
app.get('/', (req, res) => res.send('Hello World! test1111 테스트 중입니다'))

app.post('/api/users/register', (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어줌

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({success : false, err})
    return res.status(200).json({
      success : true
    })
  })
})

// 210728
app.post('/api/users/login', (req, res) => {


  // 1. 데이터베이스 안에서 요청된 이메일 찾기
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "가입 안 된 사용자로 확인됩니다."
      })
    }
  // 2. 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는지 확인하기

  user.comparePassword(req.body.password, (err, isMatch) => {
    if(!isMatch) // isMatch가 없다면 비밀번호가 같지 않다는 거니까
    return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."})

  // 3. 비밀번호까지 맞다면 토큰 생성
    user.generateToken((err, user) => {
      if(err) return res.status(400).send(err);
      
      // 토큰을 저장한다. 어디에? 쿠키, 로컬스토리지
      res.cookie("x_auth", user.token)
      .status(200) // 200 성공 400 실패
      .json({loginSuccess: true, userId: user._id})
      })
    })
  })
})

// role이 1이면 어드민, role이 2이면 특정 부서 어드민

app.get('/api/users/auth', auth, (req, res) => {

// 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True라는 말.

  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({_id: req.user._id},
    { token: ""}
    ,(err, user) => {
      if (err) return res.json({ success: false, err})
      return res.status(200).send({
        success:true
      })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})