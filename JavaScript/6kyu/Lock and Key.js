// Write a Lock function (class) that, when instantiated, can produce key objects. Those key objects must be able to "unlock" the lock they were created by, but no other lock. The lock can expire a given key, making it fail the lock's check, but other, non-expired keys should still pass.

// Here's the details:

// new Lock()
// Creates a new Lock object. The object should have a number of methods:

// .createKey()
// Creates and returns a new key object.

// .check(key)
// Returns true if the given key is valid for this lock (was made by this lock), and is not yet expired. Otherwise, returns false.

// Beware of false keys! There should be no way of making an illegal, fake copy of a key.

// .expire(key)
// Expires the given key, making it no longer valid when checking it against the lock.

// If at any point an unexpected value was passed in to one of these methods, you can do whatever you like; throw an error, return a null value, whatever you feel is appropriate.

// Example:

// var lock1 = new Lock();
// var key1 = lock1.createKey();
// lock1.check(key1); // true
// lock1.expire(key1);
// lock1.check(key1); // false

// var lock2 = new Lock();
// var key2 = lock2.createKey();
// lock1.check(key2); // false



class Lock {
    constructor() {
        this.keys = new Map();
    }
  
    createKey() {
        const key = { id: Symbol() };
        this.keys.set(key.id, key);
        return key;
    }
  
    check(key) {
        return this.keys.has(key.id) && this.keys.get(key.id) === key;
    }
  
    expire(key) {
        this.keys.delete(key.id);
    }
}