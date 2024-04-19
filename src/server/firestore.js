import { db } from "./firebase";

// Add user function
export const addUser = async (username, password) => {
    try {
        const docRef = await db.addDoc(db.collection(db, "users"), {
            username: username,
            password: password,
        });
        return docRef.id;
    } catch (error) {
        throw error;
    }
};

// Get user function
export const getUser = async (id) => {
    try {
        const snapshot = await db.collection('users').doc(id).get();
        if (snapshot.exists) {
            return { id: snapshot.id, ...snapshot.data() };
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        throw error;
    }
};

// Update user function
export const updateUser = async (id, updatedUser) => {
    try {
        await db.collection('users').doc(id).update(updatedUser);
    } catch (error) {
        throw error;
    }
};

// Delete user function
export const deleteUser = async (id) => {
    try {
        await db.collection('users').doc(id).delete();
    } catch (error) {
        throw error;
    }
};
// Get tweets function
export const getTweets = async () => {
  try {
    const snapshot = await db.collection('tweets').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw error;
  }
};

// Add tweet function
export const addTweet = async (tweet) => {
  try {
    const docRef = await db.collection('tweets').add(tweet);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

// Update tweet function
export const updateTweet = async (id, updatedTweet) => {
  try {
    await db.collection('tweets').doc(id).update(updatedTweet);
  } catch (error) {
    throw error;
  }
};

// Delete tweet function
export const deleteTweet = async (id) => {
  try {
    await db.collection('tweets').doc(id).delete();
  } catch (error) {
    throw error;
  }
};