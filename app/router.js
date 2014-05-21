var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
    this.route("login");

    this.resource('notes', function() {
      this.route('new');
      this.route('note', { 'path' : '/:note_id' });
      this.route('edit', { 'path' : '/:note_id/edit' });
    });

    this.resource('users', function() {
        this.route('new');
    });

});

export default Router;
