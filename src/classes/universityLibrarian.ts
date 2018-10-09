// Task 4
// 2. Создайте класс UniversityLibrarian, который реализует интерфейс Librarian и реализуйте все необходимые свойства.
// Метод assistCustomer должен выводить в консоль строчку `${this.name} is assisting ${custName}`.

import * as inter from "../intefaces";

class UniversityLibrarian implements inter.Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

export { UniversityLibrarian };
