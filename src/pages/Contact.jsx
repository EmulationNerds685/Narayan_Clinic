import { Box, Paper, Typography, TextField, Button, useTheme } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import FeedbackDialog from "../components/Feedback";

function Contact() {
  const theme = useTheme();
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState("");
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${backendURL}/contact`, formData);
      setResponse(result.data.message || "Message sent successfully!");
      setIsError(false);
    } catch (err) {
      console.log(err);
      setResponse("There was an error sending your message.");
      setIsError(true);
    } finally {
      setDialogOpen(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };
  

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
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
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
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
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
      <FeedbackDialog
  open={dialogOpen}
  onClose={() => setDialogOpen(false)}
  isError={isError}
  message={response}
/>

    </Box>
  );
}

export default Contact;
