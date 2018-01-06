const sqlite3 = require('sqlite3').verbose()
const csv=require('csvtojson')


const dbPath='./migrate/archives.db'
const companyInfo='./migrate/companyinfo.csv'
const stockPrices='./migrate/prices.csv'


var db = new sqlite3.Database(dbPath)


// Build the company details table
// db.serialize(function () {
//   db.run('CREATE TABLE IF NOT EXISTS companyinfo (symbol TEXT PRIMARY KEY, name TEXT, marketcap REAL, sector TEXT, industry TEXT)')

//   csv().fromFile(companyInfo)
//   .on('csv',(csvRow)=>{ 
//     // console.log(csvRow)
//     let stmt = "INSERT INTO companyinfo VALUES ('" + csvRow[0] + "','" + csvRow[1] + "'," + csvRow[2] + ",'" + csvRow[3] + "','" + csvRow[4] + "')"
//     // console.log(stmt)
//     db.run(stmt)
//   })
//   .on('done', (error) => {
//     console.log('---->  company info table done.')
//   })
// })


// Build the stock prices tables
// db.serialize(function () {
//   csv().fromFile(stockPrices)
//   .on('csv',(csvRow)=>{
//     let stmt = 'CREATE TABLE IF NOT EXISTS price_' + csvRow[1] +  ' (date DATE, open REAL, close REAL, low REAL, high REAL, volume REAL)'
//     // console.log(stmt)
//     db.run(stmt)
//   })
//   .on('done', (error) => {
//     console.log('---->  creating prices tables done.')
//   })
// })


db.serialize(function () {
  csv().fromFile(stockPrices)
  .on('csv',(csvRow)=>{
    stmt = "INSERT INTO price_" + csvRow[1] + " VALUES ('" + csvRow[0] + "'," + csvRow[2] + "," + csvRow[3] + "," + csvRow[4] + "," + csvRow[5] + "," + csvRow[6] + ")"
    // console.log(stmt)
    db.run(stmt)
  })
  .on('done', (error) => {
    console.log('---->  populating prices tables done.')
  })
})


