import { _internal } from ".";

function range(...data: number[]): number;
function range(data: number[]): number;
function range(...data: (number | number[])[]) {
    const sample = _internal.toArray(...data);
    return (
        sample.map(x => x).sort((a, b) => b - a)[0] -
        sample.map(x => x).sort((a, b) => a - b)[0]
    );
}

export = range;
