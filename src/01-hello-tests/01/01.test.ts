import {sum, mult} from "./01";

test("sum should be correct", () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action

    const result1 = sum(a, b);
    const result2 = mult(a, b);

    //expect
    expect(result1).toBe(2);
    expect(result2).toBe(3);
})