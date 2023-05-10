import { _internal } from ".";

/** Returns the given percentile (Clamped to range 0-1 and rounded to nearest hundredth) of the given data. */
function percentile(p: number, data: number[]): number;
function percentile(p: number, ...data: number[]): number;
function percentile(p: number, ...data: (number | number[])[]) {
    const percent = Math.round(Math.min(Math.max(p, 0), 1) * 100) / 100;
    const sample = _internal.toArray(...data).sort((a, b) => a - b);

    switch (percent) {
        case 0:
            return sample[0];
        case 1:
            return sample[sample.length - 1];
        default:
            const i = percent * (sample.length - 1);
            const c = Math.ceil(i);
            const f = Math.floor(i);
            return f == i
                ? sample[i]
                : (c - i) * sample[f] + (i - f) * sample[c];
    }
}

export = percentile;
