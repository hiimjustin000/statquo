import { _internal } from ".";

/** Returns the mean of the given data. */
function mean(data: number[]): number;
function mean(...data: number[]): number;
function mean(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data);
    return sample.reduce((a, x) => a + x, 0) / sample.length;
}

export = mean;
