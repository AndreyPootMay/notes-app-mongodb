const noteCrtl = {};

const Note = require('../models/Note');

noteCrtl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
}

noteCrtl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({title,description});
    
    await newNote.save();
    req.flash('success_msg', 'Note added successfully');
    res.send('adding new note');
}

noteCrtl.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', {
        notes 
    });
}

noteCrtl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id);

    res.render('notes/edit-note', {
        note
    });
}

noteCrtl.updateNote = async (req, res) => {
    const {title, description} = req.body;

    await Note.findByIdAndUpdate(req.params.id, {
        title,
        description
    });

    req.flash('success_msg', 'Note updated successfully');

    res.redirect('/notes');
}

noteCrtl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);

    req.flash('success_msg', 'Note deleted successfully');

    res.redirect('/notes');
}

module.exports = noteCrtl;