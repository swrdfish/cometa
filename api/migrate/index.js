const sqlite3=require('sqlite3').verbose()
const csv=require('csvtojson')


const dbPath='./migrate/archives.db'
// const dbPath=':memory:'
const dbFilePathPrefix='./migrate/'


var db = new sqlite3.Database(dbPath)
const coin_names = ['btc', 'doge', 'ltc', 'eth']

// Build the currency prices tables
db.serialize(() => {
	let stmt;
	for (let coin_i = 0; coin_i < coin_names.length; coin_i++) {
		stmt = 'CREATE TABLE IF NOT EXISTS price_' + coin_names[coin_i] + '(date DATE, txVolume REAL, txCount INTEGER, marketcap REAL, price REAL, exchangeVolume REAL, generatedCoins REAL, fees REAL)'
	 	db.run(stmt)
	}

	db.parallelize(() => {
		for (let coin_i = 0; coin_i < coin_names.length; coin_i++) {
			csv().fromFile(dbFilePathPrefix + coin_names[coin_i] + '.csv')
			.on('csv', ((cindex) => {
				return (csvRow)=>{
					stmt = "INSERT INTO price_" + coin_names[cindex] + " VALUES ('" + csvRow[0] + "', " + csvRow[1] + ", " + csvRow[2] + "," + csvRow[3] + "," + csvRow[4] + "," + csvRow[5] + "," + csvRow[6] + "," + csvRow[7] + ")"
					// console.log(stmt)
					db.run(stmt)
				}
			})(coin_i))
			.on('done', (error) => {
				console.log(error)
				console.log('---->  populating prices tables done.')
			})
		}
	})


})



