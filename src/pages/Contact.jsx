import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import axios from 'axios';
import FeedbackDialog from '../components/Feedback';

const Contact = () => {
  const theme = useTheme();
  const backendURL = import.meta.env.VITE_BACKEND_URL;
const [feedbackData, setFeedbackData] = useState({
  name: '',
  feedback: '',
});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${backendURL}/contact`, formData);
      setResponse(result.data.message || 'Message sent successfully!');
      setIsError(false);
    } catch (err) {
      console.error(err);
      setResponse('There was an error sending your message.');
      setIsError(true);
    } finally {
      setDialogOpen(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Container maxWidth="lg" className="!py-10 flex flex-col items-center !w-screen">
      <Typography
        variant="h4"
        className="text-center !mb-8 font-bold"
        sx={{ color: theme.palette.primary.main }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Info + Map */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="!p-6 space-y-4">
           
            <div className="!mt-4">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.312158118437!2d85.15537607415408!3d25.594541477457266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59001b844559%3A0xc68a23d3c5f4ed77!2sNarayan%20Heart%20%26%20Maternity%20Centre!5e0!3m2!1sen!2sin!4v1747651924946!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
             <Typography variant="h6" className="font-semibold">
              Our Clinic
            </Typography>
            <div>
              <p className="font-medium">📍 Address:</p>
              <p>MIG, 245, Lohia Nagar, kankarbagh,Patna-800020</p>
            </div>
            <div>
              <p className="font-medium">📞 Phone:</p>
              <p>+91 9708441467 | +91 98301 97624</p>
            </div>
            <div>
              <p className="font-medium">✉️ Email:</p>
              <p>contact@clinic.com</p>
            </div>
 <Typography
              variant="h6"
              className="!mb-4 font-semibold"
              sx={{ color: theme.palette.primary.main }}
            >
              Send Us a Message
            </Typography>

            <Box component="form" onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className='!mb-4'
              />
              <TextField
              className='!mb-4'
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
              className='!mb-4'
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
              />
                <Button
  type="submit"
  variant="outlined"
  fullWidth
  sx={{
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: '#30638E',
      color: '#ffffff',
      borderColor: '#30638E',
    },
  }}
>
  Send Message
</Button>
            </Box>
          </Paper>
          <Grid item xs={12} md={6}>
  <Paper elevation={3} className="!p-6 space-y-4">
    <Typography
      variant="h6"
      className="!mb-4 font-semibold"
      sx={{ color: theme.palette.primary.main }}
    >
      Give Us Your Feedback
    </Typography>

    <Box
      component="form"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const result = await axios.post(`${backendURL}/feedback`, feedbackData);
          setResponse(result.data.message || 'Feedback submitted successfully!');
          setIsError(false);
        } catch (err) {
          console.error(err);
          setResponse('There was an error submitting your feedback.');
          setIsError(true);
        } finally {
          setDialogOpen(true);
          setFeedbackData({ name: '', feedback: '' });
        }
      }}
      className="space-y-4"
    >
      <TextField
        fullWidth
        label="Your Name"
        name="name"
        required
        value={feedbackData.name}
        onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
      className="!mb-4"
      />
      <TextField
      className="!mb-4"
        fullWidth
        label="Your Feedback"
        name="feedback"
        required
        multiline
        rows={4}
        value={feedbackData.feedback}
        onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
      />
    <Button
  type="submit"
  variant="outlined"
  fullWidth
  sx={{
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: '#30638E',
      color: '#ffffff',
      borderColor: '#30638E',
    },
  }}
>
  Submit Feedback
</Button>

    </Box>
  </Paper>
</Grid>

        </Grid>

        {/* Contact Form */}
        
      </Grid>

      {/* Feedback dialog */}
      <FeedbackDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        isError={isError}
        message={response}
      />
    </Container>
  );
};

export default Contact;







{/*import { Box, Paper, Typography, TextField, Button, useTheme } from "@mui/material";
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
*/}