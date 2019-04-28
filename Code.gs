function getQuoteOfTheDay() {
  var spreadsheet = SpreadsheetApp.openById(""); // enter spreadsheet id
  var sheet = spreadsheet.getSheetByName("Quotes");
  sheet.getRange('d1').setFormula('=RANDBETWEEN(1,C1)');
  var randomRow = sheet.getRange('d1').getValue();
  var author = sheet.getRange('a'+ (1 + randomRow)).getValue();
  var quote = sheet.getRange('b'+ (1 + randomRow)).getValue();
  Logger.log(author);
  Logger.log(quote);
  return {author: author, quote: quote};
}

function doGet() {
    var cal = CalendarApp.getDefaultCalendar();
    var tomorrow = new Date().getTime() + 86400000; //milliseconds in a day
  var tomorrowDate = new Date(tomorrow);
  var quoteOfTheDay = getQuoteOfTheDay();
  cal.createAllDayEvent("'"+ quoteOfTheDay.quote + "'" + ' ~' + quoteOfTheDay.author, tomorrowDate);
}
