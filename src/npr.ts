import { _internal } from ".";

function npr(size: number, permutations: number) {
    const n = isNaN(size) ? 0 : Number(size);
    const r = isNaN(permutations) ? 0 : Number(permutations);
    return _internal.product(n - r + 1, n);
}

export = npr;
