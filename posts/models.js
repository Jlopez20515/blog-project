'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const PostSchema = mongoose.Schema({
  // user: {
  //   stuff in it
  // },
  title: { type: String, required: true },
  url: { type: String, required: true }
});

PostSchema.methods.serialize = function() {
  return {
    title: this.title || '',
    url: this.url || ''
  };
};

const Post = mongoose.model('Post', PostSchema);

module.exports = {Post};
