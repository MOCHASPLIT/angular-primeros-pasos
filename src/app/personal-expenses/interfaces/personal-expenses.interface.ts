export interface IExpense {
  id: number;
  concept: string;
  amount: number;
  date: string;
  category:
    | 'health'
    | 'transportation'
    | 'education'
    | 'entertainment'
    | 'food'
    | '';
}
