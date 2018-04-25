'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const {Post} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

router.post('/', jsonParser, (req, res) => {
  // shows the entire req object
  // console.log(req.body);
  const requiredFields = ['title', 'url'];
  const missingField = requiredFields.find(field => !(field in req.body));

  if (missingField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Missing field',
      location: missingField
    });
  }

  const stringFields = ['title', 'url'];
  const nonStringField = stringFields.find(
    field => field in req.body && typeof req.body[field] !== 'string'
  );

  if (nonStringField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Incorrect field type: expected string',
      location: nonStringField
    });
  }

  // If the username and password aren't trimmed we give an error.  Users might
  // expect that these will work without trimming (i.e. they want the password
  // "foobar ", including the space at the end).  We need to reject such values
  // explicitly so the users know what's happening, rather than silently
  // trimming them and expecting the user to understand.
  // We'll silently trim the other fields, because they aren't credentials used
  // to log in, so it's less of a problem.
  const explicityTrimmedFields = ['title', 'url'];
  const nonTrimmedField = explicityTrimmedFields.find(
    field => req.body[field].trim() !== req.body[field]
  );

  if (nonTrimmedField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Cannot start or end with whitespace',
      location: nonTrimmedField
    });
  }

  // up until this point we have validated our req. Now let's use it.
  let { title, url } = req.body;
  title = title.trim();
  url = url.trim();

  return Post.create({
    title,
    url
  })
  .then(post => {
    return res.status(201).json(post.serialize());
  })
  .catch(err => {
    // Forward validation errors on to the client, otherwise give a 500
    // error because something unexpected has happened
    if (err.reason === 'ValidationError') {
      return res.status(err.code).json(err);
    }
    res.status(500).json({code: 500, message: 'Internal server error'});
  });
});

// Never expose all your users like below in a prod application
// we're just doing this so we have a quick way to see
// if we're creating users. keep in mind, you can also
// verify this in the Mongo shell.
router.get('/post/:id', (req, res) => {
  console.log(req.params.id);
  // return User.find()
  //   .then(users => res.json(users.map(user => user.serialize())))
  //   .catch(err => res.status(500).json({message: 'Internal server error'}));
  let sampleResponse = {
    hello: 'world'
  }
  res.json(sampleResponse);
});

module.exports = {router};
