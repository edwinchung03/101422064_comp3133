const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'input_countries.csv');
const canadaFile = path.join(__dirname, 'canada.txt');
const usaFile = path.join(__dirname, 'usa.txt');

function deleteFileIfExists(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`${filePath} deleted.`);
  } else {
    console.log(`${filePath} does not exist.`);
  }
}

// Read the CSV file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  const rows = data.split('\n');

  const canadaData = rows.filter(row => row.includes('Canada'));

  const canadaOutput = [...canadaData].join('\n');

  deleteFileIfExists(canadaFile);
  deleteFileIfExists(usaFile)

  fs.writeFile(canadaFile, canadaOutput, 'utf8', err => {
    if (err) {
      console.error(`Error writing to Canada file: ${err.message}`);
      return;
    }
    console.log('Canada data written to canada.txt');

    console.log(canadaOutput);
  });
});
