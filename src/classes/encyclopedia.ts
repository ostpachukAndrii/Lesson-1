// Task 6
// 1. Создайте класс Encyclopedia как наследника класса ReferenceItem. Добавьте одно дополнительное числовое публичное
// свойство edition. Используйте параметры конструктора.
import { ReferenceItem } from "./referenceItem";

class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: number) {
    super(title, year);
  }

  printItem(): void {
    super.printItem();
    console.log(`«Edition: ${this.edition} (year)»`);
  }
}

export { Encyclopedia };
