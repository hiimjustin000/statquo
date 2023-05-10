import { _internal } from ".";

function spearman(list1: number[], list2: number[]) {
    const len = Math.min(list1.length, list2.length);
    const rank1 = _internal.rank(_internal.toArray(list1.slice(0, len)));
    const mean1 = rank1.reduce((a, x) => a + x, 0) / list1.length;
    const rank2 = _internal.rank(_internal.toArray(list2.slice(0, len)));
    const mean2 = rank2.reduce((a, x) => a + x, 0) / list2.length;
    const [d12, d11, d21] = Array(len)
        .fill(0)
        .reduce(
            (a, _, x) => {
                const diff1 = rank1[x] - mean1;
                const diff2 = rank2[x] - mean2;
                return [
                    a[0] + diff1 * diff2,
                    a[1] + diff1 * diff1,
                    a[2] + diff2 * diff2
                ];
            },
            [0, 0, 0]
        );
    return d12 / Math.sqrt(d11 * d21);
}

export = spearman;
