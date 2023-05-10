import { _internal } from ".";

function corr(list1: number[], list2: number[]) {
    const len = Math.min(list1.length, list2.length);
    const sample1 = _internal.toArray(list1.slice(0, len));
    const mean1 = sample1.reduce((a, x) => a + x, 0) / list1.length;
    const sample2 = _internal.toArray(list2.slice(0, len));
    const mean2 = sample2.reduce((a, x) => a + x, 0) / list2.length;
    const [a, i, o] = Array(len)
        .fill(0)
        .reduce(
            (a, _, x) => {
                const diff1 = sample1[x] - mean1;
                const diff2 = sample2[x] - mean2;
                return [
                    a[0] + diff1 * diff2,
                    a[1] + diff1 * diff1,
                    a[2] + diff2 * diff2
                ];
            },
            [0, 0, 0]
        );
    return a / Math.sqrt(i * o);
}

export = corr;
