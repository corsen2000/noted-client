export default Ember.ObjectController.extend({
    tags: function(key, value) {
        if (arguments.length > 1) {
            this.set('tag_list', value.split(/[, ]/));
        }

        return this.get('tag_list').join(' ');
    }.property('tag_list'),
    actions: {
        updateNote: function () {
            var note = this.get('content');

            note.save().then(this.transitionToNote.bind(this))
                       .catch(this.failure.bind(this));
        }
    },
    transitionToNote: function(note) {
        this.transitionToRoute('notes.note', note);
    },
    failure: function() {}
});