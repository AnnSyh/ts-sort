import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter { //наследуемся от класса Sorter
  constructor(public data: number[]) { 
    super(); // вызываем конструктор класса родителя
  }

  get length():number {  // что-бы получать как св-во т.е. collection.length а не collection.length()
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}