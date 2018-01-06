import express from 'express'
import sqlite3 from 'sqlite3'
import { getSQLiteDate } from './utils/DateUtil.js'


let app = express();
let sqlite = sqlite3.verbose()


const dbPath = './migrate/archives.db'
let db = new sqlite3.Database(dbPath)


// Returns paginated list of companies with details
app.get("/api/companies/list", (req, res) => {
    let count = 100
    let page = 1

    if (req.query.count) {
        count = req.query.count
    }

    if (req.query.page) {
        page = req.query.page
    }

    // TODO: Optimise the query to get limited number of rows
    db.all('SELECT * FROM companyinfo', (err, rows) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.json({
                'pages': Math.ceil(rows.length / count),
                'per page': count,
                'companies': rows.slice((page - 1) * count, page * count)
            })
        }
    })
})


// Returns list of all companies and their symbols
app.get("/api/companies/symbols", (req, res) => {
    db.all('SELECT name, symbol FROM companyinfo', (err, rows) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.json(rows)
        }
    })
})


// Returns list of all companies and their symbols
app.get("/api/company/info/:symbol", (req, res) => {
    db.all('SELECT * FROM companyinfo WHERE symbol = \'' + req.params.symbol + '\'', (err, rows) => {
        if (err) {
            res.status(404).json({ error: "no data found for given symbol" })
        } else {
            if (rows.length > 0) {
                res.json(rows[0])
            } else {
                res.status(404).json({ error: "no data found for given symbol" })
            }
        }
    })
})


// Returns the stock prices for the given company
app.get("/api/price/:symbol", (req, res) => {
    let start_date = getSQLiteDate(new Date(0));
    let end_date = getSQLiteDate(new Date());

    
    if (req.query.from) {
        start_date = getSQLiteDate(new Date(req.query.from))
    }

    if (req.query.end) {
        end_date = getSQLiteDate(new Date(req.query.end))
    }

    db.all('SELECT * FROM price_' + req.params.symbol + ' WHERE date BETWEEN \'' + start_date + '\' AND \'' + end_date + '\'',
        (err, rows) => {
            if (err) {
                res.status(404).json({ error: "no data found for given symbol" })
            } else {
                res.json(rows)
            }
        }
    )
})


app.listen(8000, () => console.log('Cometa api listening on port 8000..'))