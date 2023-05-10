import { _internal } from ".";

/** Returns the mean absolute deviation of the given data. */
function mad(data: number[]): number;
function mad(...data: number[]): number;
function mad(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data);
    const mean = sample.reduce((a, x) => a + x, 0) / sample.length;
    return sample.reduce((a, x) => a + Math.abs(x - mean), 0) / sample.length;
}

export = mad;
