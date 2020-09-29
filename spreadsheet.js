// const { GoogleSpreadsheet } = require('google-spreadsheet');
// const { promisify } = require('util');

// const creds = require('./client_secret.json');

// const accessSpreadsheet = async () => {
//   const doc = new GoogleSpreadsheet('1ujdokPoDMarZF1xWr7CRnJfS8uMjsfqiD-eU7DWZiug');
//   await promisify(doc.useServiceAccountAuth)(creds);
//   const info = await promisify(doc.getInfo)();
//   const sheet = info.worksheets[0];
//   console.log(sheet)
//   // console.log(`name: ${sheet.name}, email: ${sheet.email}, date: ${sheet.date}`);
// }

// accessSpreadsheet();


const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./client_secret.json');

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms');

const printStudent = () => {
  console.log(`Name: ${student.studentname}`)
  console.log(`major: ${student.major}`)
  console.log(`home state: ${student.homestate}`)
  console.log(`----------------`)

}

async function accessSpreadsheet() {
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });

  await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc.title);

  // const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  // console.log(sheet.title);
  // console.log(sheet.rowCount);
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  console.log(rows[1].Major); // 'Larry Page'


}

accessSpreadsheet();