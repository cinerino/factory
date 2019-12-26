import ErrorCode from '../errorCode';

/**
 * CinerinoError
 */
export class CinerinoError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        // tslint:disable-next-line:no-single-line-block-comment
        super(message)/* istanbul ignore next */;
        this.name = 'CinerinoError';
        this.reason = code;
    }
}
