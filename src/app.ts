//#region Task 01. Basic Types

//  1.	Реализуйте функцию getAllBooks(), которая возвращает коллекцию книжек. Объявите эту коллекцию внутри функции,
// используя let.
function getAllBooks(): Array<any> {
  const books: Array<any> = [
    {
      title: "Refactoring JavaScript",
      author: "Evan Burchard",
      available: true
    },
    {
      title: "JavaScript Testing",
      author: "Liang Yuxian Eugene",
      available: false
    },
    { title: "CSS Secrets", author: "Lea Verou", available: true },
    {
      title: "Mastering JavaScript Object-Oriented Programming",
      author: "Andrea Chiarelli",
      available: true
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
