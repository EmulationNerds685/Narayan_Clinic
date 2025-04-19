import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we just log the message (you can integrate email or backend later)
    console.log("Contact Form Submitted:", formData);
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 600,
          width: "100%",
          borderRadius: "12px",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Contact Us
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#d32f2f",
              color: "white",
              "&:hover": { backgroundColor: "#4A6B8A" },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Contact;
