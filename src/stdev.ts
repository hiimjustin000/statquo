import { _internal } from ".";

/** Returns the standard deviation of the given data. */
function stdev(data: number[]): number;
function stdev(...data: number[]): number;
function stdev(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data);
    const mean = sample.reduce((a, x) => a + x, 0) / sample.length;
    return Math.sqrt(
        sample.reduce((a, x) => a + (x - mean) ** 2, 0) / (sample.length - 1)
    );
}

export = stdev;
