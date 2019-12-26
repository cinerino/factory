// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { CinerinoError } from './common';

/**
 * RateLimitExceededError
 */
export default class RateLimitExceededError extends CinerinoError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.RateLimitExceeded, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}
