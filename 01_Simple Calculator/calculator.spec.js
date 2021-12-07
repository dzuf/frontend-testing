describe('Calculator.js', function() {

    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should add numbers to total', () => {
        calculator.add(5); // total = total + 5
        expect(calculator.total).toBe(5); // --> 5
        calculator.add(10);
        // expect(calculator.total).toBe(115);
    });

    it('should subtract numbers to total', () => {
        calculator.total = 10; 

        calculator.subtract(6); // 10 - 6

        expect(calculator.total).toBe(4);
    });

    it('should multiply numbers to total', () => {
        calculator.total = 10; 

        calculator.multiply(6); // 10 * 6

        expect(calculator.total).toBe(60);
    });

    it('should divide numbers to total', () => {
        calculator.total = 10; 

        calculator.divide(2); // 10 / 2

        expect(calculator.total).toBe(5);
    });

    it('should handle division by 0', () => {

        expect(() => calculator.divide(0)).toThrow();
        expect(() => calculator.divide(0)).toThrowError(Error);
        expect(() => calculator.divide(0)).toThrowError(Error, 'Cannot divide by zero');
    });




    it('fetches version from external source', (done) => {
        Calculator.prototype.version.then((version) => { // '0.1'
            expect(version).toBe('0.1');
            done();
        });
    });

    it('fetches version from external source v2', (done) => {
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(
            new Response('{"version": "0.1"}')
        ));
        Calculator.prototype.version.then((version) => {
            expect(version).toBe('0.1');
            done();
        });
    });

    it('fetches version from external source v3', async () => {
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(
            new Response('{"version": "0.1"}')
        ));
       const version = await calculator.version;
       expect(version).toBe('0.1');
    });
});