var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function timestampFromDate(date){
return Math.floor(date.getTime()/1000);
}
function getNatural(date){
var month = months[date.getMonth()];
var day = date.getDate()
var year = date.getFullYear();
return month+" "+day+", "+year;
}
function parse(string){
var natural = /\b([A-Za-z]+)\s(\d{1,2}),?\s(\d{4})\b/;
var timestamp = /\b\d{10}\b/;
var excd = natural.exec(string) || timestamp.exec(string);
  if(!excd) console.log(string,'didn\'t match any regex');
return excd;
}
function main(query){
var execd = parse(query);
  console.log('execd is',execd)
if(execd){
  query = parseInt(query) ? parseInt(query)*1000 : query;
var date = new Date(query);
  console.log('date is',date);
var timestamp = typeof query == 'integer' ? query : timestampFromDate(date);
var natural = execd.type == 'natural' ? query : getNatural(date);
return {unix:timestamp,natural:natural};
}
}
module.exports = main;
