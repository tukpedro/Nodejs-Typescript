"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const pi = 3.14;
        function areaCircle(radius) {
            return pi * Math.pow(radius, 2);
        }
        Area.areaCircle = areaCircle;
        function areaRect(base, height) {
            return base * height;
        }
        Area.areaRect = areaRect;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Area.areaCircle(8));
//# sourceMappingURL=namespaces.js.map