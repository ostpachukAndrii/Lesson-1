import { Category } from "./enums";

// Task 3
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

// Task 4
// 1. Объявите интерфейс Librarian, который содержит следующие свойства:
// • Строчные свойства name, email, department
// • Функция assistCustomer, которая принимает строчный параметр custName и ничего не возвращает.
interface Librarian {
  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string): void;
}

export { Book, Librarian };
