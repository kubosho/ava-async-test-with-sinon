import test from 'ava';
import sinon from 'sinon';

import { main } from './index.mjs';

test.serial('main', async (t) => {
    const fakeTimer = sinon.useFakeTimers();

    await main();
    t.pass();

    fakeTimer.restore();
});

test.serial('main2', async (t) => {
    const fakeTimer = sinon.useFakeTimers();

    await main();
    t.pass();

    fakeTimer.restore();
});
