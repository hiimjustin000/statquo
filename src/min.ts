import { _internal } from ".";

/** Returns the minimum value of the given data. */
function min(data: number[]): number;
function min(...data: number[]): number;
function min(...data: (number | number[])[]) {
    return _internal.toArray(...data).sort((a, b) => a - b)[0];
}

export = min;
