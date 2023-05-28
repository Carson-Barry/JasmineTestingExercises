
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({loanAmount: 150000, loanYears: 30, loanRate: 8})).toEqual(1100.65)
  expect(calculateMonthlyPayment({loanAmount: 10000, loanYears: 6, loanRate: 5})).toEqual(161.05)
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({loanAmount: 10000, loanYears: 6, loanRate: 5}).toString()).toEqual("161.05")
  expect(calculateMonthlyPayment({loanAmount: 150000, loanYears: 30, loanRate: 8}).toString()).toEqual("1100.65")

});