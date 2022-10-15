import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {console.error('putDb not implemented');
//create a connection to the database and version.
const textDb =await openDB('jate', 1);

//create a new transaction and specify the database.
const tx = textDb.transaction('jate', 'readwrite');

//Open up the object store.
const store = tx.objectStore('jate');

//use .put() method 
const request = store.put({jate: content});

//get confirmation of request
const result = await request;
console.log('date saved to the database', result);
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

//create a connection to the database and version.
const textDb = await openDB('jate', 1);

//create a new transaction
const tx = textDb.transaction('jate', 'readonly');

//open up the object store
const store = tx.objectStore('jate');

//use .getAll() to get all data in the database.
const request = store.getAll();

//Get confirmation of the request.
const result = await request;
console.log('result.value', result);
return result;
}



initdb();
