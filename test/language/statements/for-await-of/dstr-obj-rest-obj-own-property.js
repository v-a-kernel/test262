// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-obj-own-property.case
// - src/dstr-assignment/default/for-await-of.template
/*---
description: Rest object contains just source object's own properties (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [object-rest, destructuring-binding, async-iteration]
flags: [generated, async]
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
var o = Object.create({ x: 1, y: 2 });
o.z = 3;

var x, y, z;

var counter = 0;

async function fn() {
  for await ({ x, ...{y , z} } of [o]) {
    assert.sameValue(x, 1);
    assert.sameValue(y, undefined);
    assert.sameValue(z, 3);

    counter += 1;
  }
}

fn()
  .then(() => assert.sameValue(counter, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);
