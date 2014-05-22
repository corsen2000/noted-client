export default Ember.ObjectController.extend({
    noteSearch: '',
    noteSearchParams: function() {
        var params = {};

        if (this.get('noteSearch')) {
            params.tags = this.get('noteSearch').split(/[, ]/).join(',');
        }

        return params;
    }.property('noteSearch'),
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
            var notes = this.store.find('note', this.get('noteSearchParams'));
            this.set('notes', notes);
        },
        deleteNote: function(note) {
            note.destroyRecord();
        }
    }
});