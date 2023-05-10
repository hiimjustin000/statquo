import { _internal } from ".";

function npr(size: number, combinations: number) {
    const n = isNaN(size) ? 0 : Number(size);
    const r = isNaN(combinations) ? 0 : Number(combinations);
    const nMinusr = n - r;

    let answer = 1;
    const firstNumerator = (r < nMinusr ? nMinusr : r) + 1;
    let nextDivisor = 2;
    const lastDivisor = r < nMinusr ? r : nMinusr;
    for (
        let nextNumerator = firstNumerator;
        nextNumerator <= n;
        nextNumerator++
    ) {
        answer *= nextNumerator;
        while (nextDivisor <= lastDivisor && answer % nextDivisor == 0) {
            answer /= nextDivisor++;
        }
    }
    if (nextDivisor <= lastDivisor)
        answer /= _internal.product(nextDivisor, lastDivisor);
    return answer;
}

export = npr;
