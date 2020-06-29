/**
 * ArgumentErrorテスト
 */
import * as assert from 'assert';

import ErrorCode from './errorCode';
import { Cinerino } from './errors';

describe('new CinerinoError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new Cinerino(ErrorCode.Argument, message);
        assert(error instanceof Cinerino);
        assert.equal(error.message, message);
        assert.equal(error.name, 'CinerinoError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new Cinerino(ErrorCode.Argument);
        assert(error instanceof Cinerino);
        assert.equal(error.name, 'CinerinoError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});
