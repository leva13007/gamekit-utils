import { describe, it, expect } from "vitest";
import { shuffle } from "@/array/shuffle";

describe("shuffle", () => {
    it("returns a shuffled array with the same elements", () => {
        const input = [1, 2, 3, 4, 5];
        const output = shuffle(input);

        expect(output).toHaveLength(input.length);
        expect(output.sort()).toEqual([...input].sort());
    });

    it("does not mutate the original array", () => {
        const original = [1, 2, 3];
        const copy = [...original];
        shuffle(original);
        expect(original).toEqual(copy);
    });

    it("works with empty array", () => {
        expect(shuffle([])).toEqual([]);
    });

    it("works with single-element array", () => {
        expect(shuffle([42])).toEqual([42]);
    });

    it("usually changes the order (last item is not at the same index)", () => {
        const input = [1, 2, 3, 4, 5];
        const output = shuffle(input);
        expect(output[output.length - 1]).not.toBe(input[input.length - 1]);
    });

    it("produces different order at least once", () => {
        const input = [1, 2, 3, 4, 5];
        const seenSame = Array.from({ length: 20 }).every(() => {
            return shuffle(input).join() === input.join();
        });
        expect(seenSame).toBe(false);
    });
});