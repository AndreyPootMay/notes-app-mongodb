const noteCrtl = {};

const Note = require('../models/Note');

noteCrtl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

noteCrtl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({title,description});
    
    await newNote.save();
    
    res.send('adding new note');
}

noteCrtl.renderNotes = (req, res) => {
    res.send('rendering all notes');
}

noteCrtl.renderEditForm = (req, res) => {
    res.send('editing note');
}

noteCrtl.updateNote = (req, res) => {
    res.send('updating note');
}

noteCrtl.deleteNote = (req, res) => {
    res.send('deleting note');
}

module.exports = noteCrtl;