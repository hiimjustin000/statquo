import { _internal } from ".";

/** Returns the variance of the given data. */
function variance(data: number[]): number;
function variance(...data: number[]): number;
function variance(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data);
    const mean = sample.reduce((a, x) => a + x, 0) / sample.length;
    return (
        sample.reduce((a, x) => a + (x - mean) ** 2, 0) / (sample.length - 1)
    );
}

export = variance;
