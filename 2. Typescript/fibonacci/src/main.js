var q = 0;
var e = 1;
var r = 0;
var sum = 0;
for (var i = 0; i <= 20; i++) {
    r = q + e;
    q = e;
    e = r;
    sum = sum + r;
}
console.log("Tổng 20 số đầu tiên là : " + sum);
