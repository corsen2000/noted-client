export default Ember.ObjectController.extend({
    actions: {
        deleteNote: function(note) {
            note.destroyRecord();
            this.transitionToRoute('index');
        }
    }
});