var mongoose = require("../db.js");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//在这里创建你的模式和模型
var UserSchema = new Schema({
   role: { type: Array }, //用户账号
   token: { type: String }, //密码
   introduction: { type: Number }, //年龄
   avatar: String,
   name: String
});

var myModel = mongoose.model('userinfo', UserSchema);  // 注册表名


module.exports = myModel;
