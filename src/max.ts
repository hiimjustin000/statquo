import { _internal } from ".";

/** Returns the maximum value of the given data. */
function max(data: number[]): number;
function max(...data: number[]): number;
function max(...data: (number | number[])[]) {
    return _internal.toArray(...data).sort((a, b) => b - a)[0];
}

export = max;
