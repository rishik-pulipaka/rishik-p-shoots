import express from "express";
import cors from "cors"; // Allow cross-origin requests
import { Booking } from "./_server.js"; // Update the path if necessary

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON requests

// POST endpoint to create a booking
app.post("/api/bookings", async (req, res) => {
  try {
    const { first_name, last_name, email, photoshoot_type, date, time, comments } = req.body;

    const newBooking = await Booking.create({
      firstname: first_name,
      lastname: last_name,
      email,
      photoshootType: photoshoot_type,
      date,
      time,
      comments,
    });

    res.status(201).json({ message: "Booking created successfully!", booking: newBooking });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ error: "Failed to create booking." });
  }
});

// Start the Express server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
