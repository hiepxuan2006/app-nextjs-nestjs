import {
  Profile,
  Strategy as GoogleStrategy,
  VerifyCallback,
} from 'passport-google-oauth20'
import passport from 'passport'

// passport.serializeUser(function (user, done) {
//   // serialize the username into session
// })

// passport.deserializeUser(function (
//   req: Request,
//   id: any,
//   done: VerifyCallback
// ) {
//   // deserialize the username back into user object
//   done(null, user)
// })
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: 'http:localhost:3000/api/auth/callback/google', // callback url on our app to verify authentication.
    },
    async (
      _accessToken: string,
      _refreshToken: string,
      profile: any,
      cb: VerifyCallback
    ) => {
      try {
        const user = { profile, _accessToken, _refreshToken }
        return cb(null, user)
      } catch (e: any) {
        throw new Error(e)
      }
    }
  )
)

// passport.serializeUser((user: any, cb: any) => {
//   process.nextTick(function () {
//     return cb(null, user)
//   })
// })

// passport.deserializeUser(function (
//   user: any,
//   cb: (arg0: null, arg1: any) => any
// ) {
//   process.nextTick(function () {
//     return cb(null, user)
//   })
// })

export default passport
