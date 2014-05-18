export default {
    name: 'marked',
    initialize: function() {
        marked.setOptions({
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        });
    }
};