# ava-async-test-with-sinon

## Run parallel test

```js
npm run test:parallel
```

Expected: test fails.

```sh
$ npm run test:parallel

> ava-async-test-with-sinon@1.0.0 test:parallel
> ava index_parallel.test.mjs


  ✖ main2 Rejected promise returned by test
  ✔ main
  ─

  main2

  index_parallel.test.mjs:16

   15: test('main2', async (t) => {
   16:     const fakeTimer = sinon.useFakeTimers();
   17:

  Rejected promise returned by test. Reason:

  TypeError {
    message: 'Can\'t install fake timers twice on the same global object.',
  }

  › Object.install (file://node_modules/sinon/pkg/sinon-esm.js:6788:19)
  › createClock (file://node_modules/sinon/pkg/sinon-esm.js:4681:31)
  › exports.useFakeTimers (file://node_modules/sinon/pkg/sinon-esm.js:4708:16)
  › Sandbox.useFakeTimers (file://node_modules/sinon/pkg/sinon-esm.js:3237:46)
  › file://index_parallel.test.mjs:16:29

  ─

  1 test failed
```

```js
npm run test:parallel_without_async
```

Expected: test fails.

```sh
$ npm run test:parallel_without_async

> ava-async-test-with-sinon@1.0.0 test:parallel_without_async
> ava index_parallel.test.mjs


  ✖ main2 Rejected promise returned by test
  ✔ main
  ─

  main2

  index_parallel.test.mjs:16

   15: test('main2', async (t) => {
   16:     const fakeTimer = sinon.useFakeTimers();
   17:

  Rejected promise returned by test. Reason:

  TypeError {
    message: 'Can\'t install fake timers twice on the same global object.',
  }

  › Object.install (file://node_modules/sinon/pkg/sinon-esm.js:6788:19)
  › createClock (file://node_modules/sinon/pkg/sinon-esm.js:4681:31)
  › exports.useFakeTimers (file://node_modules/sinon/pkg/sinon-esm.js:4708:16)
  › Sandbox.useFakeTimers (file://node_modules/sinon/pkg/sinon-esm.js:3237:46)
  › file://index_parallel.test.mjs:16:29

  ─

  1 test failed
```

## Run serial test

```js
npm run test:serial
```

Expected: test succeeds.

```sh
$ npm run test:serial

> ava-async-test-with-sinon@1.0.0 test:serial
> ava index_serial.test.mjs


  ✔ main
  ✔ main2
  ─

  2 tests passed
```
