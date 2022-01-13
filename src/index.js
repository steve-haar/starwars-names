import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.js';

export const all = starWarsNames;

export function random() {
    return uniqueRandomArray(starWarsNames)();
}
