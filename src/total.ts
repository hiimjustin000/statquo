import { _internal } from ".";

/** Returns the total sum of the given data. */
function total(data: number[]): number;
function total(...data: number[]): number;
function total(...data: (number | number[])[]) {
    return _internal.toArray(...data).reduce((a, x) => a + x, 0);
}

export = total;
