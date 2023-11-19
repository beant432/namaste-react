import {Sum} from "../components/sum"

test("Sum function should return sum of two numbers", () => {
    const result = Sum(2, 5);
    
    ///assertion- an assertion is just a Boolean expression. It contains a true and false binary. 
    expect(result).toBe(7);
})