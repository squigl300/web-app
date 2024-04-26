const sqlite3 = require('sqlite3').verbose();

// SQLite database connection
const db = new sqlite3.Database('C:\\Users\\squig\\AppData\\Local\\Google\\AndroidStudio2023.1\\device-explorer\\Pixel_3a_API_34_extension_level_7_x86_64\\_\\data\\data\\com.lab2.ip3\\databases\\IP3DB', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Helper function to run SQL queries
function runQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

module.exports = {
  db,
  runQuery,
};