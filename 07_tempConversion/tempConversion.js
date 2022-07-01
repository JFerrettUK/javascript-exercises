const ftoc = function(f) {
  c = ((f - 32) * 5/9);
  rounded = c.toFixed(1);
  noRounded = Number(rounded);
  return noRounded;
};

const ctof = function(c) {
  f = ((c * 9/5) + 32);
  rounded = f.toFixed(1);
  noRounded = Number(rounded);
  return noRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
