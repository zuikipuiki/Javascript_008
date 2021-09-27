// Function that can paint walls

let paintWalls = function (item) {
console.log("The Wall has been painted "  + item );
};

paintWalls ("red");
paintWalls ("blue");

// Multiple arguments to paint different walls

let wallSides = function (item) {
console.log("The north wall has been painted " + item);
}; 

wallSides ("grey");

paintWalls ("green"), wallSides ("black");