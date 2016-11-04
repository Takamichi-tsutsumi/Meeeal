export const EatOut = 0;
export const HomeMade = 1;

export class Meal {}
Meal.schema = {
  name: 'Meal',
  primaryKey: 'id',
  properties: {
    id: 'int',
    type: 'int',
    name: 'string',
    price: 'int',
    date: 'date',
    comment: 'string',
    genre: 'string',
    place: 'string'
  }
};
