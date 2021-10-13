import jwt from "jsonwebtoken"

const config = {
     secret: "111111",
}

const UserId = "ag91919"

//backend

// - - - - - - - - - - - - - - generate token - - - - - - - - - - - - - - - - - -
// data -> audience

const generate = (UserId) => {
     const token = jwt.sign({}, config.secret, {
          expiresIn: 60,
          audience: `${UserId}`, // audience must be string
     })
     return token
}

//  - - - - - - - - - - - - - - generate token 2 - - - - - - - - - - - - - - - - -
// data -> payload

const generate2 = (UserId) => {
     const token = jwt.sign({ UserId }, config.secret, {
          expiresIn: 60,
     })
     return token
}

//- - - - -  - - - - - - - - - - - - use token - - - - - - - - - - -  - - - - -

const token1 = generate(UserId)

console.log("token -->", token1)

const verify = (token) => {
     const gettoken = jwt.verify(token, config.secret)
     return gettoken
}

const verify1 = verify(token1)

console.log("verify -->", verify1)
