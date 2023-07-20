import initializeDatabaseSchema from './utils/dbSchema.js';

initializeDatabaseSchema()
    .then(() => {
        console.log('Database schema initialized successfully!');
    })
    .catch((error) => {
        console.error('Error initializing database schema:', error);
    });