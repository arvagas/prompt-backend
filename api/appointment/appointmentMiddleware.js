const Appts = require('./appointmentModel');

module.exports = {
  validateIfCreatedByUser
};

function validateIfCreatedByUser (req, res, next) {
  const { id } = req.params;
  const apptObj = req.body;

  Appts.findById(id)
    .then(appt => {
      if (apptObj.userId === appt.userID) next();
      else res.status(400).json({ message: "The modifying user is not the owner of the appointment." });
    });
}