function steps(steps = 10) {
  return t => Math.round(t * steps) * (1 / steps);
}
export default steps;
