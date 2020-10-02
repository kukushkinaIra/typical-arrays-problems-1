exports.min = function min (array) {
  if ( array===undefined || array.length==0)
  return 0;
  let min=array[0];
  for (let i=1; i<array.length; i++) {
    if (array[i]<min)
     min=array[i];
  }
  console.log(min);
  return min;
}

exports.max = function max (array) {
  if ( array===undefined || array.length==0)
  return 0;
  let max=array[0];
  for (let i=1; i<array.length; i++) {
    if (array[i]>max)
     max=array[i];
  }
  return max;
}

exports.avg = function avg (array) {
  if ( array===undefined || array.length==0)
  return 0;
  let avg=array.reduce(function (a,b) {
    return a+b;
  })
  return avg/array.length;
}
