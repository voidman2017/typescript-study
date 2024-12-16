import { numberOfLines } from "./806.写字符串需要的行数";

describe("806.写字符串需要的行数", () => {
    it("test", () => {
        expect(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz")).toEqual([3, 60]);
        expect(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa")).toEqual([2, 4]);
        expect(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "a")).toEqual([1, 10]);
    });
});