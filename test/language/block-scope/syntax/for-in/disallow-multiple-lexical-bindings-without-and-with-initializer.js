// Copyright (C) 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    for declaration:
    disallow multiple lexical bindings, without and with initializer
negative:
  phase: early
  type: SyntaxError
---*/
for (let x, y = 4 in {}) { }

