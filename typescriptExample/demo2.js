var employee = [1, "Steve"];
var person = [1, "Steve", true];
var use = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
console.log(use);
var stId = 23;
var stName = "Hari";
console.log(stId);
console.log(stName);
//declaration with assignment
var Student = [12, "Hari"];
console.log(Student);
//declaration with assignment
var student = [3, "Krishna"];
console.log(student);
//multi datatype tuple
var bookingType;
bookingType = [true, 44, "Confirmed", 56.4];
console.log(bookingType);
var emp;
emp = [[1, "shreya"], [2, "gaurav"]];
console.log(emp);
emp.push([3, "gauri"]);
console.log(emp);
//Tuple Array
var products;
products = [[101, 'TV'], [203, 'Refridgerator'], [80, 'Washing Machine']];
console.log(products);
products.push([108, 'Computer']);
products.push([111, 'Mike']);
console.log(products);
var products1;
products1 = [[101, 'TV'], [203, 'Refridgerator'], [80, 'Washing Machine']];
console.log(products);
// products.push([108,'Computer']);
// products.push([111,'Mike']);
// console.log(products);
// products.push(products1);
// products1.push(products);
var printMedia;
(function (printMedia) {
    printMedia[printMedia["newpaper"] = 0] = "newpaper";
    printMedia[printMedia["magazine"] = 1] = "magazine";
    printMedia[printMedia["newletter"] = 2] = "newletter";
    printMedia[printMedia["book"] = 3] = "book";
})(printMedia || (printMedia = {}));
function getMedia(medianame) {
    if (medianame === "fabo" || medianame === "outlook") {
        return printMedia.magazine;
    }
}
console.log(getMedia('fabo'));
var printMedia2;
(function (printMedia2) {
    printMedia2[printMedia2["newpaper"] = 1] = "newpaper";
    printMedia2[printMedia2["Newsletter"] = getMedia('newsletter')] = "Newsletter";
    printMedia2[printMedia2["magazine"] = printMedia2.Newsletter * 3] = "magazine";
    printMedia2[printMedia2["book"] = 10] = "book";
})(printMedia2 || (printMedia2 = {}));
function getPrintMedia(medianame) {
    if (medianame == "Newsletter") {
        return 9;
    }
}
console.log(printMedia2.Newsletter);
