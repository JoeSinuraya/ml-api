const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./submissionmlgc-joesinuraya-85f3844c75e1.json')

async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-joesinuraya',
      keyFilename: pathKey,
    });

    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}

module.exports = storeData;
