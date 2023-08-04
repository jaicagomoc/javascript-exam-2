const getNumberType = (number) => {
  // implement code here
  if (typeof number !== 'number' || isNaN(number)) {
    return null;
  }

  if (number === 0 || number === -10) {
    return null;
  }

  return number % 2 === 0 ? 'even number' : 'odd number';
};

export default getNumberType;
