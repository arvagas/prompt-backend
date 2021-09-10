const express = require('express');
const router = express.Router();
const Appts = require('./appointmentModel');
const authMW = require('../auth/authMiddleware');
const mw = require('./appointmentMiddleware');

router.get('/all', (req, res) => {
  Appts.find()
  .then(appts => res.status(200).json(appts))
  .catch(err => res.status(500).json({ err: err.message }))
});

router.post('/', authMW, (req, res) => {
  const newAppt = req.body;

  Appts.add(newAppt)
    .then(appt => res.status(201).json(appt))
    .catch(err => res.status(500).json({ err: err.message }))
});

router.put('/:id', authMW, mw.validateIfCreatedByUser, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Appts.update(id, changes)
    .then(appt => res.status(200).json(appt))
    .catch(err => res.status(500).json({ err: err.message }))
});

router.delete('/:id', authMW, mw.validateIfCreatedByUser, (req, res) => {
  const { id } = req.params;

  Appts.remove(id)
    .then(fav => res.status(200).json(fav))
    .catch(err => res.status(500).json({ err: err.message }))
});

module.exports = router;