var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mongo_url = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://localhost/snip"
mongoose.connect(mongo_url);

var mainSchema = new Schema({
  name: String,
  link: String,
  icon: String
});

var mainObjSchema = mongoose.model('mainObjSchema', mainSchema);
