export default Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    deactivate: function() {
        var model = this.controller.content;
        if(model.get('isDirty')) {
            model.rollback();
        }
    }
});