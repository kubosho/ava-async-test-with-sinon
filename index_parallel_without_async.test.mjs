import test from 'ava';
import sinon from 'sinon';

import { main } from './index.mjs';

test('main', (t) => {
    const fakeTimer = sinon.useFakeTimers();

    main();
    t.pass();

    fakeTimer.restore();
});

test('main2', (t) => {
    const fakeTimer = sinon.useFakeTimers();

    main();
    t.pass();

    fakeTimer.restore();
});
