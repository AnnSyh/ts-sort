"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([4, -3, 11, 2, -655]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('dfhfghfgh');
var sorter = new Sorter_1.Sorter(numbersCollection);
var sorterCharacters = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
sorterCharacters.sort();
console.log('numbersCollection.data = ', numbersCollection.data);
console.log('sorterCharacters.data = ', sorterCharacters);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
var sorter2 = new Sorter_1.Sorter(linkedList);
sorter2.sort();
linkedList.print();
