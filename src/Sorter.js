"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                // has type of array of number
                // if (this.collection[j] > this.collection[j + 1]) {
                //   const leftHand = this.collection[j];
                //   this.collection[j] = this.collection[j + 1];
                //   this.collection[j + 1] = leftHand;
                // }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
// если передаваймый на сортировку элемент имеет такие параметры:
// length, compare и swap  то он может быть отсортирован
