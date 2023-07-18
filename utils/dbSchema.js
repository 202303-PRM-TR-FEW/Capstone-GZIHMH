// utils/dbSchema.js
import { firestore } from './firebase';
import categories_db from './categories_db';

// Define your collections and initial fields here
export const collectionNames = {
    USERS: 'users',
    COURSES: 'courses',
    CATEGORIES: 'categories',
    LESSONS: 'lessons',
    ACHIEVEMENTS: 'achievements',
};

// You can also define initial data for collections if needed
export const initialCourses = [
    { title: 'Course 1', description: 'Description of Course 1' },
    { title: 'Course 2', description: 'Description of Course 2' },
];

// Function to initialize the database schema (creating collections if needed)
export const initializeDatabaseSchema = async() => {
    try {
        // Check if the collections already exist before initializing
        const collections = await firestore.listCollections();
        const collectionNamesSet = new Set(collections.map((col) => col.id));

        // Create the 'courses' collection if it doesn't exist
        if (!collectionNamesSet.has(collectionNames.COURSES)) {
            const coursesRef = firestore.collection(collectionNames.COURSES);
            await Promise.all(initialCourses.map((course) => coursesRef.add(course)));
        }

        console.log('Database schema initialized!');
    } catch (error) {
        console.error('Error initializing database schema:', error);
    }
};

export const seedCategoriesData = async() => {
    try {
        const categoriesRef = firestore.collection(collectionNames.CATEGORIES);

        const snapshot = await categoriesRef.get();
        if (!snapshot.empty) {
            console.log('Categories data already seeded in Firestore.');
            return;
        }

        categories_db.forEach(async(category) => {
            const { id, name, svg } = category;
            await categoriesRef.doc(id.toString()).set({ name, svg });
        });

        console.log('Categories data seeded in Firestore.');
    } catch (error) {
        console.error('Error seeding categories data:', error);
    }
};