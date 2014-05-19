export default Ember.ObjectController.extend({
    noteSearch: '',
    notes: [],
    sortedNotes: function() {
        return Em.ArrayProxy.createWithMixins(Ember.SortableMixin, {
            content: this.get('notes'),
            sortProperties: ['updated_at'],
            sortAscending: false
        });
    }.property('notes'),
    actions: {
        search: function () {
            var notes = this.store.find('note');
            this.set('notes', notes);
        },
        deleteNote: function(note) {
            note.destroyRecord();
        }
    }
});