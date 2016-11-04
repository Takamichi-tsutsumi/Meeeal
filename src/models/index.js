import Realm from 'realm';
import { Meal } from './Meal';
import { Genre } from './Genre';

export default new Realm({ schema: [Genre, Meal], schemaVersion: 1 });
