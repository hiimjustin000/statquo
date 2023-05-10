import { _internal } from ".";

/** Returns the given quantile (Clamped to range 0-1) of the given data. */
function quantile(q: number, data: number[]): number;
function quantile(q: number, ...data: number[]): number;
function quantile(q: number, ...data: (number | number[])[]) {
    const quant = Math.min(Math.max(q, 0), 1);
    const sample = _internal.toArray(...data).sort((a, b) => a - b);

    switch (quant) {
        case 0:
            return sample[0];
        case 1:
            return sample[sample.length - 1];
        default:
            const i = quant * (sample.length - 1);
            const c = Math.ceil(i);
            const f = Math.floor(i);
            return f == i
                ? sample[i]
                : (c - i) * sample[f] + (i - f) * sample[c];
    }
}

export = quantile;
