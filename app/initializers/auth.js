var CustomAuthenticator = Ember.SimpleAuth.Authenticators.Base.extend({
    restore: function(data) {
      alert('restore');      
    },
    authenticate: function(options) {
      return $.ajax({
        url: 'sessions',
        type: 'POST',
        dataType: 'json',
        data: {
          email: 'test@test.com',
          password: 'test'
        }
      });
    },
    invalidate: function() {
      alert('invalidate');
    }
});

export default {
  name: 'authentication',
  initialize: function(container, application) {
    container.register('authenticator:custom', CustomAuthenticator);
    Ember.SimpleAuth.setup(container, application);
  }
};