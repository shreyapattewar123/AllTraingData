var manus = /** @class */ (function () {
    function manus(code, name) {
        this.empcode = code;
        this.name = name;
    }
    manus.prototype.getSalary = function (empcode) {
        return 20000;
    };
    return manus;
}());
var emp = new manus(1, "shreya");
console.log(emp);
