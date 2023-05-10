import { _internal } from ".";

function covp(list1: number[], list2: number[]) {
    const len = Math.min(list1.length, list2.length);
    const sample1 = _internal.toArray(list1.slice(0, len));
    const mean1 = sample1.reduce((a, x) => a + x, 0) / list1.length;
    const sample2 = _internal.toArray(list2.slice(0, len));
    const mean2 = sample2.reduce((a, x) => a + x, 0) / list2.length;
    return (
        Array(len)
            .fill(0)
            .reduce(
                (a, _, x) => a + (sample1[x] - mean1) * (sample2[x] - mean2),
                0
            ) / len
    );
}

export = covp;
