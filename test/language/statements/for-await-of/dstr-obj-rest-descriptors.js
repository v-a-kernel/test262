// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-descriptors.case
// - src/dstr-assignment/default/for-await-of.template
/*---
description: Object created from rest deconstruction doesn't copy source object property descriptors. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [object-rest, destructuring-binding, async-iteration]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var rest;
var obj = {};
Object.defineProperty(obj, "a", { value: 3, configurable: false, enumerable: true });
Object.defineProperty(obj, "b", { value: 4, writable: false, enumerable: true });

var counter = 0;

async function fn() {
  for await ({...rest} of [obj]) {
    assert.sameValue(rest.a, 3);
    assert.sameValue(rest.b, 4);

    verifyEnumerable(rest, "a");
    verifyWritable(rest, "a");
    verifyConfigurable(rest, "a");

    verifyEnumerable(rest, "b");
    verifyWritable(rest, "b");
    verifyConfigurable(rest, "b");

    counter += 1;
  }
}

fn()
  .then(() => assert.sameValue(counter, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);
