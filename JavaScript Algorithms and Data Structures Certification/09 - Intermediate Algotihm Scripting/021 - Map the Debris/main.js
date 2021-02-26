function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(debris => {
    const a = earthRadius + debris.avgAlt;
    const mu = GM;
    return {
      name: debris.name,
      orbitalPeriod: Math.round(2*Math.PI*Math.sqrt(Math.pow(a,3)/mu))
    };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);