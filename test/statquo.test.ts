import * as assert from "assert";
import * as statquo from "../src";

describe("statquo", () => {
    describe("mean", () => {
        it("should return 3", () => {
            assert.strictEqual(statquo.mean([1, 2, 3, 4, 5]), 3);
        });
    });
    describe("median", () => {
        it("should return 3", () => {
            assert.strictEqual(statquo.median([1, 2, 3, 4, 5]), 3);
        });
        it("should return 2.5", () => {
            assert.strictEqual(statquo.median([1, 2, 3, 4]), 2.5);
        });
    });
    describe("mode", () => {
        it("should return 3", () => {
            assert.deepStrictEqual(statquo.mode([1, 2, 3, 3, 4, 5]), [3]);
        });
    });
    describe("range", () => {
        it("should return 4", () => {
            assert.strictEqual(statquo.range([1, 2, 3, 4, 5]), 4);
        });
    });
    describe("stdev", () => {
        it("should return about 1.58114", () => {
            assert.strictEqual(
                Math.round(statquo.stdev([1, 2, 3, 4, 5]) * 100000) / 100000,
                1.58114
            );
        });
    });
    describe("mad", () => {
        it("should return 1.2", () => {
            assert.strictEqual(statquo.mad([1, 2, 3, 4, 5]), 1.2);
        });
    });
    describe("quantile", () => {
        it("should return 3", () => {
            assert.strictEqual(statquo.quantile(0.5, [1, 2, 3, 4, 5]), 3);
        });
    });
    describe("cov", () => {
        it("should return 2.5", () => {
            assert.strictEqual(
                statquo.cov([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
                2.5
            );
        });
    });
    describe("covp", () => {
        it("should return 2", () => {
            assert.strictEqual(
                statquo.covp([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
                2
            );
        });
    });
    describe("corr", () => {
        it("should return 1", () => {
            assert.strictEqual(
                statquo.corr([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
                1
            );
        });
    });
    describe("spearman", () => {
        it("should return 1", () => {
            assert.strictEqual(
                statquo.spearman([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
                1
            );
        });
    });
    describe("factorial", () => {
        it("should return 120", () => {
            assert.strictEqual(statquo.factorial(5), 120);
        });
    });
});
