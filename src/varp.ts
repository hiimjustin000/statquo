import { _internal } from ".";

/** Returns the population variance of the given data. */
function varp(data: number[]): number;
function varp(...data: number[]): number;
function varp(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data);
    const mean = sample.reduce((a, x) => a + x, 0) / sample.length;
    return sample.reduce((a, x) => a + (x - mean) ** 2, 0) / sample.length;
}

export = varp;
