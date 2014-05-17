export default DS.RESTSerializer.extend({
    extractArray: function(store, type, payload, id, requestType) {
        payload = {
            note: payload
        };

        return this._super(store, type, payload, id, requestType);
    },
    extractSingle: function(store, type, payload, id, requestType) {
        payload = {
            note: payload
        };

        return this._super(store, type, payload, id, requestType);  
    }
});