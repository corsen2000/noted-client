export default Ember.ObjectController.extend(Ember.SimpleAuth.LoginControllerMixin, {
    authenticatorFactory: 'authenticator:custom',
    content: {}
});