import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 1800;

app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST"],       // Allowed HTTP methods
    credentials: true,
  }));
  
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "rishik2006",
  database: "photographywebsite",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

// API endpoint for bookings
app.post("/bookings", (req, res) => {
    const { first_name, last_name, email, photoshoot_type, date_time, comments } = req.body;
  
    if (!first_name || !last_name || !email || !photoshoot_type || !date_time) {
      return res.status(400).json({ error: "Missing required fields." });
    }
  
    const sql = "INSERT INTO bookings (first_name, last_name, email, photoshoot_type, date_time, comments) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [first_name, last_name, email, photoshoot_type, date_time, comments], (err) => {
      if (err) {
        console.error("Database error:", err); // Log detailed error
        return res.status(500).json({ error: "Error saving booking." });
      }
      res.status(200).json({ message: "Booking saved successfully." });
    });
  });
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
