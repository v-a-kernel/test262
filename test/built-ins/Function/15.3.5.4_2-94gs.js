// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.5.4_2-94gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function expression (FunctionDeclaration includes
    strict directive prologue)
flags: [noStrict]
---*/

var gNonStrict = function () {
    return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}

function f() {
    "use strict";
    gNonStrict();
}

assert.throws(TypeError, function() {
    f();
});
