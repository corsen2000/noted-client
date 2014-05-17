export default Ember.ObjectController.extend({
    noteSearch: '',
    notes: [],
    actions: {
        search: function () {
            var notes = this.store.find('note');
            this.set('notes', notes);
        }
    }
});