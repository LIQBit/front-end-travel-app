import { cityInfo } from "../src/client/js/app";


describe("Testing submit functionality", () => {
    test ("Testing the cityInfo() function", () => {
        expect(cityInfo).toBeDefined();
    });
});