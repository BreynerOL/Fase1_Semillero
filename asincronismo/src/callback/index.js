
function restar(a,b) {
  return a-b;
}

function call(x,y,z) {
  return z(x,y);
}

console.log(call(2,3, restar));


/*
function date(callback) {
  console.log(new Date);

  setTimeout(function() {
    let date = new Date;
    callback(date);
  }, 3000);
}

function PrintDate(datenow) {
  console.log(datenow);
}

date(PrintDate);
*/