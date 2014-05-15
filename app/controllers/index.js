export default Ember.ObjectController.extend({
    noteSearch: '',
    actions: {
        search: function () {
            alert(this.get('noteSearch'));
        }
    }
});