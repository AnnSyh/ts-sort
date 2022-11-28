import { Sorter } from './Sorter'

export class CharactersCollection extends Sorter { //наследуемся от класса Sorter
  constructor(public data: string) {
    super(); // вызываем конструктор класса родителя
   }

  get length(): number {  // что-бы получать как св-во т.е. collection.length а не collection.length()
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
  }

  swap(leftIndex: number, rightIndex: number): void {
    // т.к. в строке переставлять местами символы не возможно
    // разбиваем строку на массив с буквами и там уже переставляем их местами 
    const characters = this.data.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join(''); // собираем из массива букв обратно в строчку
  }
}