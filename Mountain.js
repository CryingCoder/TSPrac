var mountains = [
    { Name: "Kilimanjaro", Height: 19341 },
    { Name: "Everest", Height: 29029 },
    { Name: "Denali", Height: 20310 }
];
function findNameOfTallestMountain(mountain) {
    var maxValue = 0;
    var tallestName = "";
    mountain.forEach(function (m) {        
        if (m.Height > maxValue) {
            maxValue = m.Height;
        }
    });
    return tallestName;
}
var mountainName = (findNameOfTallestMountain(mountains));
console.log(mountainName);