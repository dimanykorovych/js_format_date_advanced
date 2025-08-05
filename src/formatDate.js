'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  let day = '';
  let month = '';
  let year = '';
  const result = [];

  const fromSeparator = fromFormat[fromFormat.length - 1];
  const toSeparator = toFormat[toFormat.length - 1];
  const dateArr = date.split(fromSeparator);

  for (let i = 0; i < dateArr.length; i++) {
    if (fromFormat[i] === 'DD') {
      day = dateArr[i];
    }

    if (fromFormat[i] === 'MM') {
      month = dateArr[i];
    }

    if (fromFormat[i] === 'YYYY') {
      year = dateArr[i];
    }

    if (fromFormat[i] === 'YY' && toFormat.includes('YYYY')) {
      if (dateArr[i] < 30) {
        year = `20${dateArr[i]}`;
      } else {
        year = `19${dateArr[i]}`;
      }
    }
  }

  for (let i = 0; i < dateArr.length; i++) {
    if (toFormat[i] === 'DD') {
      result[i] = day;
    }

    if (toFormat[i] === 'MM') {
      result[i] = month;
    }

    if (toFormat[i] === 'YYYY') {
      result[i] = year;
    }

    if (toFormat[i] === 'YY') {
      result[i] = year.slice(-2);
    }
  }

  return result.join(toSeparator);
}

module.exports = formatDate;
