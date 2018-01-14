import express from 'express'
import sqlite3 from 'sqlite3'
import { getSQLiteDate } from './utils/DateUtil.js'


let app = express();
let sqlite = sqlite3.verbose()


const dbPath = './migrate/archives.db'
let db = new sqlite3.Database(dbPath)


// Returns the prices for the given currency
app.get("/api/price/:symbol", (req, res) => {
    let start_date = getSQLiteDate(new Date(0));
    let end_date = getSQLiteDate(new Date());

    
    if (req.query.from) {
        start_date = getSQLiteDate(new Date(req.query.from))
    }

    if (req.query.end) {
        end_date = getSQLiteDate(new Date(req.query.end))
    }

    db.all('SELECT * FROM price_' + req.params.symbol.toLowerCase() + ' WHERE date BETWEEN \'' + start_date + '\' AND \'' + end_date + '\'',
        (err, rows) => {
            if (err) {
                res.status(404).json({ error: "no data found for given currency" })
            } else {
                res.json(rows)
            }
        }
    )
})


app.listen(8000, () => console.log('Cometa api listening on port 8000..'))