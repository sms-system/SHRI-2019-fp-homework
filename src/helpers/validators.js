/* 
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import {
  flip,
  gt,
  lt,
  compose,
  length,
  test,
  match,
  complement,
  includes,
  allPass,
  anyPass
} from 'ramda';

/**
 * Функции сравнения
 */
const ltThen = flip(lt);
const gtThen = flip(gt);

/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */
const getDigits = match(/\d/g);
const digitsCount = compose(length, getDigits);

/**
 * Функции для проверки наличия конкретного символа в строке
 */
const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);
const notIncludes = complement(includes);


// 1. Длина < 5 и кол-во цифр > 2 шт.
export const validateFieldN1 = allPass([ compose(ltThen(5), length), compose(gtThen(2), digitsCount) ]);

// 2. Длина < 5 и кол-во цифр < 2 шт.
export const validateFieldN2 = allPass([ compose(ltThen(5), length), compose(ltThen(2), digitsCount) ]);

// 3. Длина > 5 или кол-во цифр > 1 шт.
export const validateFieldN3 = allPass([ compose(gtThen(5), length), compose(gtThen(1), digitsCount) ]);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
export const validateFieldN4 = allPass([ compose(ltThen(10), length), compose(gtThen(2), digitsCount), includes(4) ]);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
export const validateFieldN5 = allPass([ compose(ltThen(10), length), compose(gtThen(1), digitsCount), notIncludes(4) ]);

// 6. Длина > 5, или одна из цифр равна "7"
export const validateFieldN6 = anyPass([ compose(gtThen(5), length), includes(7) ]);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
export const validateFieldN7 = allPass([ compose(gtThen(8), length), compose(gtThen(3), digitsCount), containsOnlyEng ]);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
export const validateFieldN8 = anyPass([ compose(ltThen(5), length), containsOnlyEng, includes(7) ]);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
export const validateFieldN9 = allPass([ compose(ltThen(8), length), compose(gtThen(4), digitsCount), containsOnlyEng ]);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
export const validateFieldN10 = anyPass([ compose(ltThen(4), length), compose(gtThen(2), digitsCount), containsOnlyEng ]);
