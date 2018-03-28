'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const PostSchema = mongoose.Schema({
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  // password: {
  //   type: String,
  //   required: true
  // },
  // firstName: {type: String, default: ''},
  // lastName: {type: String, default: ''}
});

// PostSchema.methods.serialize = function() {
//   return {
//     username: this.username || '',
//     firstName: this.firstName || '',
//     lastName: this.lastName || ''
//   };
// };

// PostSchema.methods.validatePassword = function(password) {
//   return bcrypt.compare(password, this.password);
// };

// PostSchema.statics.hashPassword = function(password) {
//   return bcrypt.hash(password, 10);
// };

const Post = mongoose.model('Post', PostSchema);

module.exports = {Post};
