/*globals define*/
requirejs.config({
    baseUrl: ''
});

define(
    [
        // no dependencies
    ],
    function () {

    // @constructor
    function Model() {

    };

    Model.prototype = {
        addTwoNumbers : function(a, b) {
            return null;
        }
    };

    return Model;
});
