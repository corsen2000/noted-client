export default Ember.View.extend({
    click: function(e) {
        var $target = $(e.target);
        if($target.is('a') && $target.parents('.navbar').length) {
            $('.navbar-collapse').collapse('hide');
        }
    }
});