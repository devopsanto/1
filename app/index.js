const express = require("express");
const app = express();

const restaurants = [
  { id: 1, name: "SS Hyderabad Biryani", location: "Chennai", rating: 4.5 },
  { id: 2, name: "Domino's Pizza", location: "Coimbatore", rating: 4.2 },
  { id: 3, name: "KFC", location: "Bangalore", rating: 4.0 },
  { id: 4, name: "A2B Veg Restaurant", location: "Madurai", rating: 4.4 }
];

// Home page
app.get("/", (req, res) => {
  res.send("🍔 Welcome to Zomato Clone API 🚀");
});

// Get all restaurants
app.get("/restaurants", (req, res) => {
  res.json(restaurants);
});

// Get restaurant by ID
app.get("/restaurants/:id", (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found ❌" });
  }

  res.json(restaurant);
});

app.listen(1000, () => {
  console.log("🍽️ Zomato Clone API running on port 1000");
});
