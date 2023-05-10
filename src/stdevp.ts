import { _internal } from ".";

/** Returns the population standard deviation of the given data. */
function stdevp(data: number[]): number;
function stdevp(...data: number[]): number;
function stdevp(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data);
    const mean = sample.reduce((a, x) => a + x, 0) / sample.length;
    return Math.sqrt(
        sample.reduce((a, x) => a + (x - mean) ** 2, 0) / sample.length
    );
}

export = stdevp;
