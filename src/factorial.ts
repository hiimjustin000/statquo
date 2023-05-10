import { _internal } from ".";

/** Returns the factorial of the given value. */
function factorial(value: number) {
    return _internal.gamma(value + 1);
}

export = factorial;
