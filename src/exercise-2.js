const getTheExactNumber = (numbers) => {
  // implement code here
  const divisibleBy3 = numbers.filter((number) => number % 3 === 0);
  return Math.max(...divisibleBy3)
}

export default getTheExactNumber;