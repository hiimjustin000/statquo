import corr from "./corr";
import cov from "./cov";
import covp from "./covp";
import factorial from "./factorial";
import length from "./length";
import mad from "./mad";
import max from "./max";
import mean from "./mean";
import median from "./median";
import min from "./min";
import mode from "./mode";
import ncr from "./ncr";
import npr from "./npr";
import percentile from "./percentile";
import quantile from "./quantile";
import quartile from "./quartile";
import range from "./range";
import spearman from "./spearman";
import stdev from "./stdev";
import stdevp from "./stdevp";
import total from "./total";
import variance from "./variance";
import varp from "./varp";

/** @internal */
export const _internal = {
    gammaG: 4.7421875,
    gammaP: [
        0.99999999999999709182, 57.156235665862923517, -59.597960355475491248,
        14.136097974741747174, -0.49191381609762019978,
        0.33994649984811888699e-4, 0.46523628927048575665e-4,
        -0.98374475304879564677e-4, 0.15808870322491248884e-3,
        -0.21026444172410488319e-3, 0.2174396181152126432e-3,
        -0.16431810653676389022e-3, 0.84418223983852743293e-4,
        -0.2619083840158140867e-4, 0.36899182659531622704e-5
    ],
    /** Converts the given data to a number array. */
    toArray(...data: (number | number[])[]) {
        return (Array.isArray(data[0]) ? data[0] : data)
            .map(Number)
            .filter(x => !Number.isNaN(x));
    },
    rank(list: number[]) {
        if (list.length <= 0) return [];
        const ranking = [];
        const n = list
            .map((x, i) => [x, i])
            .sort((a, b) => {
                const l = a[0];
                const c = b[0];
                return (l == Infinity && c == Infinity) ||
                    (l == -Infinity && c == -Infinity)
                    ? 0
                    : l - c;
            });
        let s = 0;
        let i = 1;
        let o = 1;
        for (; s < list.length; i += o, s += o) {
            let a = s;
            for (; a < list.length - 1 && n[a][0] === n[a + 1][0]; a++);
            o = a - s + 1;
            let u = 0;
            for (a = 0; a < o; a++) {
                u = n[s + a][1];
                ranking[u] = isNaN(list[u]) ? NaN : i + (o - 1) / 2;
            }
        }
        return ranking;
    },
    /** Returns the product of the given range. */
    product(i: number, n: number): number {
        if (n < i) return 1;
        if (n == i) return n;
        const half = (n + i) / 2;
        return this.product(i, half) * this.product(half + 1, n);
    },
    /** Returns the gamma value of the given number. */
    gamma(value: number): number {
        let x = 0;

        if (isFinite(value) && value == Math.round(value)) {
            if (value <= 0 || value > 171) return Infinity;
            return this.product(1, value - 1);
        }
        if (value < 0.5)
            return (
                Math.PI / (Math.sin(Math.PI * value) * this.gamma(1 - value))
            );
        if (value >= 171.35) return Infinity;
        if (value > 85.0) {
            const twoN = value * value;
            const threeN = twoN * value;
            const fourN = threeN * value;
            const fiveN = fourN * value;
            return (
                Math.sqrt((2 * Math.PI) / value) *
                (value / Math.E) ** value *
                (1 +
                    1 / (12 * value) +
                    1 / (288 * twoN) -
                    139 / (51840 * threeN) -
                    571 / (2488320 * fourN) +
                    163879 / (209018880 * fiveN) +
                    5246819 / (75246796800 * fiveN * value))
            );
        }
        value--;

        x = this.gammaP[0];
        for (let i = 1; i < this.gammaP.length; i++) {
            x += this.gammaP[i] / (value + i);
        }
        const t = value + this.gammaG + 0.5;
        return Math.sqrt(2 * Math.PI) * t ** (value + 0.5) * Math.exp(-t) * x;
    }
};

export {
    corr,
    cov,
    covp,
    factorial,
    length,
    mad,
    max,
    mean,
    median,
    min,
    mode,
    ncr,
    npr,
    percentile,
    quantile,
    quartile,
    range,
    spearman,
    stdev,
    stdevp,
    total,
    variance,
    varp
};
