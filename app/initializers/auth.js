var CustomAuthenticator = Ember.SimpleAuth.Authenticators.Base.extend({
    restore: function(data) {
      return new Ember.RSVP.Promise(function(resolve) {
        resolve(data);
      });
    },
    authenticate: function(options) {
      return $.ajax({
        url: 'sessions',
        type: 'POST',
        dataType: 'json',
        data: {
          email: options.identification,
          password: options.password
        }
      });
    }
});

var CustomAuthorizer = Ember.SimpleAuth.Authorizers.Base.extend({
  authorize: function(jqXHR) {
    jqXHR.setRequestHeader('Authorization', 'Token token=' + this.session.content.auth_token);
  }
});

export default {
  name: 'authentication',
  initialize: function(container, application) {
    container.register('authenticator:custom', CustomAuthenticator);
    container.register('authorizer:custom', CustomAuthorizer);
    Ember.SimpleAuth.setup(container, application, {
      authorizerFactory: 'authorizer:custom'
    });
  }
};