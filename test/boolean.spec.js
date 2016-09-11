describe('Boolean', () => {
    it('should be truthy', () => {
        expect('string').toBeTruthy();
        expect('0').toBeTruthy();
        expect(12).toBeTruthy();
        expect([]).toBeTruthy();
        expect({}).toBeTruthy();
    });

    it('should be falsy', () => {
        expect(null).toBeFalsy();
        expect(0).toBeFalsy();
        expect("").toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(undefined).toBeFalsy();
    });
});