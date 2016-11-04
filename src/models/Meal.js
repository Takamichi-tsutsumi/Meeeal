export const EatOut = 0;
export const HomeMade = 1;

export class Meal {}
Meal.schema = {
  name: 'Meal',
  primaryKey: 'id',
  properties: {
    id: 'int',
    type: { type: 'int', indexed: true },
    food: 'string',
    price: 'int',
    date: { type: 'date', indexed: true },
    comment: 'string',
    genre: 'Genre',
    place: 'string',
    // picture: 'data'
  }
};
