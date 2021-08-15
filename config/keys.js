module.exports = {
  mongoURL: 'mongodb+srv://shubham:shubham@cluster0.obf15.mongodb.net/database?retryWrites=true&w=majority',
  // mongoURL: process.env.mongoURL,
  // secretOrKey: process.env.secretOrKey || 'secret',
  secretOrKey: process.env.secretOrKey || 'secret',
}
