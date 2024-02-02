import { Component } from '@angular/core';
import { PersonalExpensesService } from '../../services/personal-expenses.service';
import { IExpense } from '../../interfaces/personal-expenses.interface';

@Component({
  selector: 'app-form-expenses',
  templateUrl: './form-expenses.component.html',
  styleUrls: ['./form-expenses.component.css'],
})
export class FormExpensesComponent {
  public expense: IExpense = {
    id: 0,
    amount: 0,
    category: '',
    concept: '',
    date: '',
  };
  public selectedCategory: string = '';

  constructor(private _personalExpensesService: PersonalExpensesService) {}

  private _selectedExpenseCopy: IExpense | null = null;

  get selectedExpense(): IExpense | null {
    if (!this._personalExpensesService.selectedExpense) {
      return null;
    }

    if (!this._selectedExpenseCopy) {
      this._selectedExpenseCopy = {
        ...this._personalExpensesService.selectedExpense,
      };
    }

    return this._selectedExpenseCopy;
  }

  get categories(): string[] {
    return this._personalExpensesService.categories;
  }

  addNewExpense() {
    this._personalExpensesService.addExpense(this.expense);
    this.resetForm();
  }

  resetForm() {
    this.expense = {
      id: 0,
      amount: 0,
      category: '',
      concept: '',
      date: '',
    };
  }

  updateExpense(expense: IExpense) {
    this._personalExpensesService.updateExpenseById(expense);
    this.cancelEdit();
  }

  cancelEdit() {
    this._personalExpensesService.selectedExpense = null;
    this._personalExpensesService.enableCheckboxs = true;
    this._personalExpensesService.enableBtnView = true;
    this._personalExpensesService.enableBtnDelete = true;
    this._selectedExpenseCopy = null;
  }
}
