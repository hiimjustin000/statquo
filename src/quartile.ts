import { _internal } from ".";

/** Returns the given quartile (Clamped to range 0-1 and rounded to the nearest fourth) of the given data. */
function quartile(q: number, data: number[]): number;
function quartile(q: number, ...data: number[]): number;
function quartile(q: number, ...data: (number | number[])[]) {
    const quart = Math.round(Math.min(Math.max(q, 0), 1) * 4) / 4;
    const sample = _internal.toArray(...data).sort((a, b) => a - b);

    switch (quart) {
        case 0:
            return sample[0];
        case 1:
            return sample[sample.length - 1];
        default:
            const i = quart * (sample.length - 1);
            const c = Math.ceil(i);
            const f = Math.floor(i);
            return f == i
                ? sample[i]
                : (c - i) * sample[f] + (i - f) * sample[c];
    }
}

export = quartile;
