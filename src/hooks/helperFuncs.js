/////////For use in PriceConvertion:
// makes sure that value in filter !isNAN
export const handleValue = (e, handleWith) => {
    const amount = parseFloat(e.target.value);
    if (Number.isNaN(amount)) {
      handleWith(0);
    } else {
      handleWith(amount);
    }
  };

// replace 00 for 0 or 0[1-9] for [1-9]
export const cleanValue = (value) => {
    const regex = /(^0{2})|(^0[1-9])/;
    const stringValue = value.toString();
    return stringValue.replace(regex, (match) => match[match.length - 1]);
  };
