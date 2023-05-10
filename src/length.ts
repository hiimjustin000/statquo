import { _internal } from ".";

/** Returns the length of the given data. */
function length(data: number[]): number;
function length(...data: number[]): number;
function length(...data: (number | number[])[]) {
    return _internal.toArray(...data).length;
}

export = length;
