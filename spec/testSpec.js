/*global describe, it */
'use strict';

require('model', function (model) {
    describe("Add two numbers", function() {

        var a, b;

        beforeEach(function() {
            a = 0;
            b = 1;
        });

        it("Returns a number", function() {

            var result = model.addTwoNumbers(a, b);

            expect(result).toBe(1);
        });
    });
});
