/**
 * 
 */

import { getMonth } from "../../helpers/Date";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function returns 'janvier' for the date 2022-01-01", () => {
            const result = getMonth(new Date("2022-01-01"));
            expect(result).toBe("janvier");
        });
        it("the function returns 'juillet' for the date 2022-07-08", () => {
            const result = getMonth(new Date("2022-07-08"));
            expect(result).toBe("juillet");
        });
    });
});


