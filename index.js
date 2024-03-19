// import express and mysql
import express from 'express';
import mysql from 'mysql';

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'business_data',
  user: 'root',
  password: 'root123',
});

// Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// PORT
const PORT = 5000;

// Starting Express Server and Connecting to MySQL
app.listen(PORT, () => {
  console.log(`SERVER : http://localhost:${PORT}`);

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('CONNECTED SUCCESSFULLY');
  });
});

//Route For All DATA
//http://localhost:5000/get_all
app.get('/get_all', (req, res) => {
  const sql_query = `SELECT * FROM sample_data`;

  connection.query(sql_query, (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.send('Error fetching data');
      return;
    }
    res.json(result);
  });
});

//Route to get revenue and gross profit of a specific company
//http://localhost:5000/get_one_data?ticker=AAPL
app.get('/get_one_data', (req, res) => {
  console.log(req.query.ticker);

  const ticker = req.query.ticker;

  const sql_query = `SELECT * FROM sample_data
    WHERE ticker = "${ticker}"`;

  connection.query(sql_query, (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.send('Error fetching data');
      return;
    }
    res.json(result);
  });
});

//Route to get revenue and gross profit of a specific company for last 5 years
//http://localhost:5000/get_data?ticker=AAPL&column=revenue,gp&period=5y
app.get('/get_data', (req, res) => {
  const ticker = req.query.ticker;
  const column = req.query.column;
  const period = req.query.period;
  const year = period.substring(0, period.length - 1);

  const sql_query = `SELECT ticker, date, ${column} FROM sample_data
      WHERE ticker = "${ticker}"
      ORDER BY date DESC
      LIMIT ${year}`;

  connection.query(sql_query, (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.send('Error fetching data');
      return;
    }
    res.json(result);
  });
});
