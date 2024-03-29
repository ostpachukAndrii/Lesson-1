// Task 5
// 1. Создайте класс ReferenceItem, который содержит:
//  a.	Строчное свойство title
//  b.	Числовое свойство year
//  c.	Конструктор c двумя параметрами: строчный параметр newTitle, числовой параметр newYear,
//  который в консоль выводит строчку 'Creating a new ReferenceItem...' и инициализирует поля.
//  d.	Метод printItem() без параметров, который ничего не возвращает.
//  Этот метод должен использовать template string literal и выводить строчку «title was published in year» в консоль.

class ReferenceItem {
  // title: string
  // year: number

  // constructor(newTitle: string, newYear: number)
  // {
  //     console.log("Creating a new ReferenceItem...");
  //     this.title=newTitle;
  //     this.year=newYear;
  // }

  printItem(): void {
    console.log(
      `${this.title} was published in ${this.year} department ${
        ReferenceItem.department
      }`
    );
  }

  constructor(public title: string, protected year: number) {}

  private _publisher: string;

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  static department: string = "default value";
}

export { ReferenceItem };
