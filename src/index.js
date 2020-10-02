exports.min = function min (array) {
  let min;
  if ( array===undefined || array.length==0)
  return 0;
  for (let i=0; array.length; i++) {
    if (array[i]<array[i+1])
     min=array[i];
  }
  return min;
}

exports.max = function max (array) {
  if ( array===undefined || array.length==0)
  return 0;
  for (let i=0; array.length; i++) {
    if (array[i]>array[i+1])
     min=array[i];
  }
  return min;
}

exports.avg = function avg (array) {
  if ( array===undefined || array.length==0)
  return 0;
  let avg=array.reduce(function(a,b) {
    return (a+b)/array.length;
  })
  return avg;
}
