// MongoDB initialization script
// This script runs when the MongoDB container starts for the first time

// Switch to the restaurant_reviews database
db = db.getSiblingDB('restaurant_reviews');

// Create the restaurants collection with sample data
db.restaurants.insertMany([
  {
    "name": "The Golden Spoon",
    "cuisine": "Italian", 
    "address": {
      "building": "123",
      "street": "Main Street",
      "zipcode": "10001"
    }
  },
  {
    "name": "Sakura Sushi",
    "cuisine": "Japanese",
    "address": {
      "building": "456", 
      "street": "Oak Avenue",
      "zipcode": "10002"
    }
  },
  {
    "name": "Taco Fiesta",
    "cuisine": "Mexican",
    "address": {
      "building": "789",
      "street": "Pine Boulevard", 
      "zipcode": "10003"
    }
  },
  {
    "name": "Dragon Palace",
    "cuisine": "Chinese",
    "address": {
      "building": "321",
      "street": "Elm Street",
      "zipcode": "10004"
    }
  },
  {
    "name": "Café Paris",
    "cuisine": "French",
    "address": {
      "building": "654",
      "street": "Maple Drive",
      "zipcode": "10005"
    }
  },
  {
    "name": "Curry House",
    "cuisine": "Indian",
    "address": {
      "building": "987",
      "street": "Cedar Lane",
      "zipcode": "10006"
    }
  },
  {
    "name": "The Burger Joint",
    "cuisine": "American",
    "address": {
      "building": "147",
      "street": "Birch Road",
      "zipcode": "10007"
    }
  },
  {
    "name": "Mediterranean Delight",
    "cuisine": "Mediterranean",
    "address": {
      "building": "258",
      "street": "Walnut Street",
      "zipcode": "10008"
    }
  }
]);

// Create indexes for better performance
db.restaurants.createIndex({ "name": "text" });
db.restaurants.createIndex({ "cuisine": 1 });
db.restaurants.createIndex({ "address.zipcode": 1 });

// Create the reviews collection with indexes
db.createCollection("reviews");
db.reviews.createIndex({ "restaurant_id": 1 });
db.reviews.createIndex({ "user_id": 1 });
db.reviews.createIndex({ "date": -1 });

// Add some sample reviews
db.reviews.insertMany([
  {
    "restaurant_id": db.restaurants.findOne({"name": "The Golden Spoon"})._id,
    "name": "John Doe",
    "text": "Excellent pasta and great service!",
    "date": "2024-01-15",
    "user_id": "user123"
  },
  {
    "restaurant_id": db.restaurants.findOne({"name": "Sakura Sushi"})._id,
    "name": "Jane Smith", 
    "text": "Fresh sushi and authentic Japanese atmosphere.",
    "date": "2024-01-20",
    "user_id": "user456"
  },
  {
    "restaurant_id": db.restaurants.findOne({"name": "Taco Fiesta"})._id,
    "name": "Mike Johnson",
    "text": "Great tacos and reasonable prices!",
    "date": "2024-01-25",
    "user_id": "user789"
  }
]);

print("Database initialization completed!");
print("Created restaurants collection with", db.restaurants.countDocuments(), "restaurants");
print("Created reviews collection with", db.reviews.countDocuments(), "reviews");
print("Created text index on restaurants.name field");