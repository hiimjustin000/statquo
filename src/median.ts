import { _internal } from ".";

/** Returns the median of the given data. */
function median(data: number[]): number;
function median(...data: number[]): number;
function median(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data).sort((a, b) => a - b);
    const middle1 = Math.floor(sample.length / 2);
    const middle2 = Math.ceil(sample.length / 2);
    return sample.length % 2 == 0
        ? (sample[middle1] + sample[middle2]) / 2
        : sample[middle1];
}

export = median;
