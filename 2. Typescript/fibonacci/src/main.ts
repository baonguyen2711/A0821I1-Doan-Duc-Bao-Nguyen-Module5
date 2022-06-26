let q = 0
let e = 1
let r = 0
let sum = 0
for (let i = 0; i <= 20; i++) {
    r = q + e;
    q = e;
    e = r;
    sum = sum + r
}
console.log("Tổng 20 số đầu tiên là : " + sum);