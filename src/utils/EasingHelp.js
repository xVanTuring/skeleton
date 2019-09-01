let EasingConfig = {
  ease: ["default", "in", "out", "both"],
  Quad: ["in", "out", "both"],
  Cubic: ["in", "out", "both"],
  Quart: ["in", "out", "both"],
  Quint: ["in", "out", "both"],
  Sine: ["in", "out", "both"],
  Expo: ["in", "out", "both"],
  Circ: ["in", "out", "both"],
  Back: ["in", "out", "both"],
  linear: ["default"]
};
// https://codepen.io/juliangarnier/pen/mWdraw?editors=1000
let EasingIn = {
  ease: "0.420, 0.000, 1.000, 1.000",
  Quad: "0.550, 0.085, 0.680, 0.530",
  Cubic: "0.550, 0.055, 0.675, 0.190",
  Quart: "0.895, 0.030, 0.685, 0.220",
  Quint: "0.755, 0.050, 0.855, 0.060",
  Sine: "0.470, 0.000, 0.745, 0.715",
  Expo: "0.950, 0.050, 0.795, 0.035",
  Circ: "0.600, 0.040, 0.980, 0.335",
  Back: "0.600, -0.280, 0.735, 0.045"
};
let EasingOut = {
  ease: "0.000, 0.000, 0.580, 1.000",
  Quad: "0.250, 0.460, 0.450, 0.940",
  Cubic: "0.215, 0.610, 0.355, 1.000",
  Quart: "0.165, 0.840, 0.440, 1.000",
  Quint: "0.230, 1.000, 0.320, 1.000",
  Sine: "0.390, 0.575, 0.565, 1.000",
  Expo: "0.190, 1.000, 0.220, 1.000",
  Circ: "0.075, 0.820, 0.165, 1.000",
  Back: "0.175, 0.885, 0.320, 1.275"
};
let EasingInOut = {
  ease: "0.420, 0.000, 0.580, 1.000",
  Quad: "0.455, 0.030, 0.515, 0.955",
  Cubic: "0.645, 0.045, 0.355, 1.000",
  Quart: "0.770, 0.000, 0.175, 1.000",
  Quint: "0.860, 0.000, 0.070, 1.000",
  Sine: "0.445, 0.050, 0.550, 0.950",
  Expo: "1.000, 0.000, 0.000, 1.000",
  Circ: "0.785, 0.135, 0.150, 0.860",
  Back: "0.680, -0.550, 0.265, 1.550"
};
let AllEasePath = {
  in: EasingIn,
  out: EasingOut,
  both: EasingInOut,
  default: {
    ease: "0.250, 0.100, 0.250, 1.000",
    linear: "1, 1, 0, 0"
  }
};
function getEasingPath(curve, mode) {
  return AllEasePath[mode][curve];
}
export { EasingConfig, getEasingPath };
