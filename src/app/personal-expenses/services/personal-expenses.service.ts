import { Injectable } from '@angular/core';
import { IExpense } from '../interfaces/personal-expenses.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonalExpensesService {
  constructor() {}

  public expenses: IExpense[] = expensesList;
  public selectedExpense: IExpense | null = null;
  public enableCheckboxs: boolean = true;
  public enableBtnView: boolean = false;
  public enableBtnDelete: boolean = false;
  public categories: string[] = [
    'health',
    'transportation',
    'education',
    'entertainment',
    'food',
  ];

  addExpense(expense: IExpense): void {
    if (
      expense.amount < 1 ||
      expense.category === '' ||
      expense.concept === '' ||
      expense.date === ''
    ) {
      return;
    }
    const findObjectHigherId = this.expenses.reduce(
      (objectHigherId, currentObject) => {
        return currentObject.id > objectHigherId.id
          ? currentObject
          : objectHigherId;
      },
      this.expenses[0],
    );
    expense.id = findObjectHigherId.id + 1;
    this.expenses.push(expense);
  }

  deleteExpensesByIds(ids: number[]): void {
    if (!ids) return;
    ids.forEach((id) => {
      const index = this.expenses.findIndex((expense) => expense.id === id);
      if (index !== -1) {
        this.expenses.splice(index, 1);
      }
    });
    this.selectedExpense = null;
  }

  showExpenseSelectedById(id: number): void {
    if (!id) return;
    const data = this.expenses.find((expense) => expense.id === id);
    if (!data) return;
    this.selectedExpense = data;
  }

  updateExpenseById(updateExpense: IExpense): void {
    if (!updateExpense) return;
    const data = this.expenses.find(
      (expense) => expense.id === updateExpense.id,
    );
    if (!data) return;
    // data.id = updateExpense.id
    data.amount = updateExpense.amount;
    data.category = updateExpense.category;
    data.concept = updateExpense.concept;
    data.date = updateExpense.date;
  }
}

export const expensesList: IExpense[] = [
  {
    id: 1,
    concept: 'Groceries',
    amount: 55.25,
    date: '2023-01-10',
    category: 'food',
  },
  {
    id: 2,
    concept: 'Movie with friends',
    amount: 20.0,
    date: '2023-01-15',
    category: 'entertainment',
  },
  {
    id: 3,
    concept: 'Gasoline',
    amount: 40.75,
    date: '2023-01-20',
    category: 'transportation',
  },
  {
    id: 4,
    concept: 'Dinner at a restaurant',
    amount: 65.5,
    date: '2023-02-01',
    category: 'food',
  },
  {
    id: 5,
    concept: 'New book',
    amount: 15.99,
    date: '2023-02-10',
    category: 'education',
  },
  {
    id: 6,
    concept: 'Gym',
    amount: 30.0,
    date: '2023-02-15',
    category: 'health',
  },
];
