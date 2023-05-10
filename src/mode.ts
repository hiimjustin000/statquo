import { _internal } from ".";

/** Returns the mode of the given data. */
function mode(data: number[]): number[];
function mode(...data: number[]): number[];
function mode(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data);
    const counts: Record<string, number> = {};
    sample.forEach(x => ((counts[x] ??= 0), counts[x]++));
    const maxCount = Math.max(...Object.values(counts));
    return maxCount > 1
        ? Object.keys(counts)
              .filter(x => counts[x] == maxCount)
              .map(Number)
        : [];
}

export = mode;
