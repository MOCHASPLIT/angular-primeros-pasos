import { Component } from '@angular/core';
import {
  PersonalExpensesService,
  expensesList,
} from '../../services/personal-expenses.service';
import { IExpense } from '../../interfaces/personal-expenses.interface';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css'],
})
export class ListExpensesComponent {
  tableHeaders = ['AMOUNT', 'CATEGORY', 'CONCEPT', 'DATE'];
  public ids: number[] = [];
  public expenseSelectedToFromList: number | null = null;

  constructor(private _personalExpensesService: PersonalExpensesService) {}

  get expensesData(): IExpense[] {
    return [...this._personalExpensesService.expenses];
  }

  get enableBtnView(): boolean {
    return this._personalExpensesService.enableBtnView;
  }

  get enableBtnDelete(): boolean {
    return this._personalExpensesService.enableBtnDelete;
  }

  get enableCheckboxs(): boolean {
    return this._personalExpensesService.enableCheckboxs;
  }

  selectExpensesByIds(id: number): void {
    const index = this.ids.indexOf(id);
    index === -1 ? this.ids.push(id) : this.ids.splice(index, 1);

    this.ids.length === 1
      ? ((this._personalExpensesService.enableBtnView = true),
        (this.expenseSelectedToFromList = this.ids[0]))
      : ((this._personalExpensesService.enableBtnView = false),
        (this.expenseSelectedToFromList = null));

    this.ids.length > 0
      ? (this._personalExpensesService.enableBtnDelete = true)
      : (this._personalExpensesService.enableBtnDelete = false);
  }

  deleteExpensesByIds(): void {
    this._personalExpensesService.deleteExpensesByIds(this.ids);
    this.ids = [];
    this._personalExpensesService.enableBtnView = false;
    this._personalExpensesService.enableBtnDelete = false;
    this._personalExpensesService.enableCheckboxs = true;
    this.expenseSelectedToFromList = null;
  }

  showExpenseByIdFromList(): void {
    if (!this.expenseSelectedToFromList) return;
    this._personalExpensesService.showExpenseSelectedById(
      this.expenseSelectedToFromList,
    );
    this._personalExpensesService.enableCheckboxs = false;
    this._personalExpensesService.enableBtnView = false;
    this._personalExpensesService.enableBtnDelete = false;
  }
}
