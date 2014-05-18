export default Ember.ObjectController.extend({
    noteTitle: '',
    noteContent: '',
    noteTags: '',
    actions: {
        createNote: function () {
            var note = this.store.createRecord('note', {
                title: this.get('noteTitle'),
                content: this.get('noteContent'),
                tag_list: this.get('noteTags').split(/[, ]/)
            });

            note.save().then(this.transitionToNote.bind(this))
                       .catch(this.failure.bind(this));
        }
    },
    transitionToNote: function(note) {
        this.transitionToRoute('notes.note', note);
    },
    failure: function() {}
});