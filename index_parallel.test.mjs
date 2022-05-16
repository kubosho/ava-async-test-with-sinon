import test from 'ava';
import sinon from 'sinon';

import { main } from './index.mjs';

test('main', async (t) => {
    const fakeTimer = sinon.useFakeTimers();

    await main();
    t.pass();

    fakeTimer.restore();
});

test('main2', async (t) => {
    const fakeTimer = sinon.useFakeTimers();

    await main();
    t.pass();

    fakeTimer.restore();
});
