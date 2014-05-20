export default Ember.View.extend({
    actions: {
        deleteNote: function(note) {
            var msg = 'Are you sure you want to delete this note?\n\n' +
                'Title: ' + note.get('title');

            if(window.confirm(msg)) {
                this.get('controller').send('deleteNote', note);
            }
        }
    }
});