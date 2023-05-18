import { _internal } from ".";

/** Returns the median of the given data. */
function median(data: number[]): number;
function median(...data: number[]): number;
function median(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data).sort((a, b) => a - b);
    const middle = Math.floor(sample.length / 2);
    return sample.length % 2 == 0
        ? (sample[middle - 1] + sample[middle]) / 2
        : sample[middle];
}

export = median;
