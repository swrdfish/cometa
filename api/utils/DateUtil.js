
// Takes Javascript date and returns sqlite3 suitable date
function getSQLiteDate(given_date) {
    function pad(number) {
      if (number < 10) {
        return '0' + number
      }
      return number
    }

    let res = "" + given_date.getUTCFullYear() +
        '-' + pad(given_date.getUTCMonth() + 1) +
        '-' + pad(given_date.getUTCDate())

    return res
}


export {getSQLiteDate}