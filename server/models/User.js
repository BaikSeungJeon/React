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

    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch);
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

userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    // user._id + '' = token
    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾고,
        // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

            user.findOne({"_id": decoded, "token": token}, function(err, user){
                if (err) return cb(err);
                cb(null, user)
            })
        })
    }

const User = mongoose.model('User', userSchema) // 모델로 스키마를 감싸는 과정

module.exports = { User } // 다른 곳에서도 사용하기 위함