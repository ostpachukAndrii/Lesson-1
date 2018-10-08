//#region Task 01. Basic Types

//  1.	Реализуйте функцию getAllBooks(), которая возвращает коллекцию книжек. Объявите эту коллекцию внутри функции,
// используя let.
function getAllBooks(): Array<Book> {
  const books: Array<any> = [
    {
      id: 1,
      title: "Refactoring JavaScript",
      author: "Evan Burchard",
      available: true,
      category: Category.JavaScript
    },
    {
      id: 2,
      title: "JavaScript Testing",
      author: "Liang Yuxian Eugene",
      available: false,
      category: Category.JavaScript
    },
    {
      id: 3,
      title: "CSS Secrets",
      author: "Lea Verou",
      available: true,
      category: Category.CSS
    },
    {
      id: 4,
      title: "Mastering JavaScript Object-Oriented Programming",
      author: "Andrea Chiarelli",
      available: true,
      category: Category.JavaScript
    }
  ];

  return books;
}

//  2.	Реализуйте функцию logFirstAvailable(), которая принимает массив книг в качестве параметра и выводит в консоль:
//  a.	количество книг в массиве
//  b.	название первой доступной книги
//      Используйте:
//  c.	следующие типы данных number, string, void.
//  d.	for-of для обхода коллекции
//  e.	бектикс (`) для вывода строчных значений
function logFirstAvailable(books: Array<any>): string {
  let info: string;
  let firstAvailableBookTitle: string;
  const arrayLength: number = books.length;

  for (let book of books) {
    if (book.available) {
      firstAvailableBookTitle = book.title;
      break;
    }
  }

  if (firstAvailableBookTitle === undefined) {
    firstAvailableBookTitle = `Доступных книг не найдено`;
  }

  info = `Количество книг в массиве: ${arrayLength}
Название первой доступной книги: ${firstAvailableBookTitle}
Все книги:`;

  for (let book of books) {
    info += `\n ${book.title}`;
  }

  return info;
}

//3.	Запустите функцию logFirstAvailable()
const booksInfo: string = logFirstAvailable(getAllBooks());
console.log(booksInfo);

//#endregion

//#region Task 02. Enum

// 1. Объявите enum Category для хранения следующих категорий книг:
const enum Category {
  JavaScript,
  CSS,
  HTML,
  TypeScript,
  Angular
}

// 2. Добавьте категорию к объектам в функции getAllBooks()
// --> див. вище

// 3. Реализуйте функцию getBookTitlesByCategory(), которая на вход будет получать категорию и возвращать массив
// наименований книг, которые принадлежат указанной категории. Используйте тип Array<string> и объявленный enum.
function getBookTitlesByCategory(category: Category): Array<string> {
  const books: Array<any> = getAllBooks();
  return books.filter(b => b.category === category).map(book => {
    if (book.category === category) {
      return book.title;
    }
  });
}

// 4. Реализуйте функцию logBookTitles(), которая принимает массив строк и выводит его в консоль. Используйте типы:
// string[] и  void.
function logBookTitles(stringArray: Array<string>): void {
  console.log(stringArray.join(", "));
}

logBookTitles(getBookTitlesByCategory(Category.JavaScript));

//#endregion

//#region Task 03. Defining an Interface

//1. Объявите интерфейс Book, который включает следующие поля

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged(reason: string): void;
}

// 2. Внесите изменения в функцию getAllBooks(), укажите тип возвращаемого значения,
// используя объявленный выше интерфейс Book. Удалите временно id у книжки и увидите, что появится ошибка.
//--> Див. вище

// 3. Создайте функцию printBook(), которая на вход принимает книгу и выводит в консоль фразу
// book.title + by + book.author. Для типа параметра используйте интерфейс Book.

function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

// 4. Объявите переменную myBook и присвойте ей следующий объект
const myBook: Book = {
  id: 5,
  title: "Colors, Backgrounds, and Gradients",
  author: "Eric A. Meyer",
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: reason => console.log(`Damaged: ${reason}`)
};
// 5. Вызовите функцию printBook() и передайте ей myBook. Никаких ошибок при этом не должно появляться.
printBook(myBook);

// 6. Добавьте в интерфейс Book свойство pages: number.
//Вы получите ошибку в функции getAllBooks(). Чтобы ошибка не возникала сделайте свойство не обязательным.
//--> Див. вище

// 7. Укажите явно для переменной myBook тип Book.
//Вы снова получите ошибку. Удалите свойства year, copies. Добавьте свойство pages: 200.
//--> Див. вище

// 8. Добавьте в интерфейс Book необязательное свойство markDamaged, которое является методом.
//Метод принимает на вход строчный параметр reason и ничего не возвращает.
//Добавьте этот метод в объект myBook. Метод должен выводить строчку `Damaged: ${reason}`,
//используя стрелочную функцию. Вызовите этот метод и передайте строку ‘missing back cover’
console.log("\nTask 3.8");
myBook.markDamaged("missing back cover");

//#endregion

//#region Task 04. Interfaces for Class Types

// 1. Объявите интерфейс Librarian, который содержит следующие свойства:
// • Строчные свойства name, email, department
// • Функция assistCustomer, которая принимает строчный параметр custName и ничего не возвращает.
interface Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string): void;
}

// 2. Создайте класс UniversityLibrarian, который реализует интерфейс Librarian и реализуйте все необходимые свойства.
// Метод assistCustomer должен выводить в консоль строчку `${this.name} is assisting ${custName}`.

class UniversityLibrarian implements Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

// 3. Объявите переменную favoriteLibrarian используя интерфейс Librarian и проинициализируйте ее с помощью объекта,
// созданного классом UniversityLibrarian(). Никаких ошибок при этом не должно возникать. Проинициализируйте
// свойство name и вызовите метод assistCustomer().

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = "My favorite librarian";
console.log("\n Task 4.3");
favoriteLibrarian.assistCustomer("Andrii");

//#endregion

//#region Task 05. Creating and Using Classes
console.log("\n Task 05");

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
    console.log(`${this.title} was published in ${this.year} department ${ReferenceItem.department}`);
  }

  constructor(public title: string, private year: number) {}

  private _publisher: string;

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  static department: string = "default value";
}

//2. Объявите переменную ref и проинициализируйте ее объектом ReferenceItem.
//Передайте значения параметров в конструктор. Вызовите метод printItem().
const ref: ReferenceItem = new ReferenceItem("Book", 1994);
ref.printItem();

//3. Закомментируйте конструктор, свойства title и year и реализуйте создание свойств
//через параметры конструктора (title- public, year - private).
// --> див. вище

// 4. Создайте приватное свойство _publisher: string.
//    a. Добавьте геттер publisher, который преобразовывает свойство _publisher в верхний регистр и возвращает его.
//    b. Добавьте сеттер publisher, который принимает строчный параметр newPublisher и устанавливает значение свойства
//    _publisher в значение этого параметра.
//    c. Проинициализируйте свойство ref.publisher каким-либо сточным значением и выведите его в консоль.
//    Результат должен быть в верхнем регистре.
ref.publisher = "Kiev";
console.log(`\n Publisher=${ref.publisher}`);

// 5. Создайте статичное строчное свойство department и проинициализируйте его каким-либо значением по умолчанию.
// Внесите изменения в метод printItem() – добавьте вывод в консоль этого статического свойства.
// --> див. вище

//#endregion
