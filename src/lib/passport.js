const passport = require('passport')
const { Strategy: GoogleStrategy } = require('passport-google-oauth20')

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  done(null, obj)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    function (token, tokenSecret, profile, done) {
      // Xử lý xác thực Google ở đây
      return done(null, profile)
    }
  )
)
