
it('should calculate the monthly rate correctly', function () {
  const initialVals = {
    "amount": 123456,
     "years": 7,
     "rate" : 8
    };
    expect(calculateMonthlyPayment(initialVals)).toEqual("1924.21");
});


it("should return a result with 2 decimal places", function() {
  const initialVals = {
    "amount": 123456,
     "years": 7,
     "rate" : 8
    };
    const val = calculateMonthlyPayment(initialVals).split(".");
    expect(val[1].length ).toEqual(2);
  
});

/// etc
