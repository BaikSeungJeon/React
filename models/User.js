const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10 
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 스페이스바를 없애주는 역할
        unique: 1 // 같은 이메일 사용하지 못하게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, // 숫자로 관리자인지 일반 유저인지 구분
        default: 0 // 디폴트 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// 210728
// 비밀번호를 암호화 시키는 작업
userSchema.pre('save', function(next){
    
    var user = this;

    // model 안에 password가 변할 때만 bcrypt를 이용해서 암호화 해준다.
    if(user.isModified('password')) {

        bcrypt.genSalt(saltRounds, function(err, salt){ // salt를 만들 때 saltRounds가 필요
            if (err) return next(err)
    
            bcrypt.hash( user.password , salt , function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        }) 
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {
    // plainPassword 1234567 암호화 된 비밀번호랑 같다

    bcrypt.compare(plainPassword, this.password, function(err, inMatch) {
        if(err) return cb(err),
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {

    var user = this;
    // jsonwebtoken을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    // user._id + 'secretToken' = token

    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })
}

const User = mongoose.model('User', userSchema) // 모델로 스키마를 감싸는 과정

module.exports = { User } // 다른 곳에서도 사용하기 위함