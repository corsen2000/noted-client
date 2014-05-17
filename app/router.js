var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
    this.route("login");

    this.resource('notes', function() {
      this.route('new');
      this.route('note', { 'path' : '/:note_id' });
    });

});

export default Router;
