const Clarifai = require('clarifai');

const { CLARIFAI_APIKEY } = require('../config/keys');

const app = new Clarifai.App({
  apiKey: CLARIFAI_APIKEY
 });

 const handleApiCall = () => (req, res) => {
   app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json('Unable to work with API.'));
 };

const handleImage = (db) => (req, res) => {
  const { id } = req.body;
  let found = false;

  db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => {
      res.json(entries[0]);
    })
    .catch((err) => res.status(400).json('Unable to get entries'));
};

module.exports = {
  handleImage,
  handleApiCall
};