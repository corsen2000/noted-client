export default Ember.ObjectController.extend({
    email: '',
    password: '',
    actions: {
        createUser: function () {
            var user = this.store.createRecord('user', {
                email: this.get('email'),
                password: this.get('password')
            });

            user.save().then(this.transitionToLogin.bind(this), this.failure);
        },

    },
    transitionToLogin: function() {
        this.transitionToRoute('login');
    },
    failure: function() {}
});