/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  MenuItem,
  FormControl,
  CircularProgress,
  Paper,
  Typography,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
} from "@mui/material";
import axios from "axios";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ph_number: "", // Corrected
    address: "",
    service: "",
    appointment_date: "", // Corrected
    appointment_time: "", // Corrected
  });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [processingDialogOpen, setProcessingDialogOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSendOtp = async () => {
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      setOtpLoading(true);
      const res = await axios.post(`${backendURL}/api/otp/send`, {
        email: formData.email,
      });
      setOtpSent(true);
      setResponse(res.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP. Try again.");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      alert("Enter the complete 4-digit OTP.");
      return;
    }
    try {
      await axios.post(`${backendURL}/api/otp/verify`, {
        email: formData.email,
        otp: enteredOtp,
      });
      setOtpVerified(true);
      alert("Email verified successfully!");
    } catch (error) {
      alert("Invalid or expired OTP.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert("Please verify your email before booking.");
      return;
    }
    setLoading(true);
    setProcessingDialogOpen(true);

    try {
      const result = await axios.post(`${backendURL}/api/appointments/book`, formData);
      setResponse(result.data.message || "Appointment booked successfully!");
      setIsError(false);
    } catch (err) {
      setResponse("Error booking appointment. Please try again.");
      setIsError(true);
    } finally {
      setProcessingDialogOpen(false);
      setDialogOpen(true);
      setLoading(false);
      // Corrected form data reset
      setFormData({
        name: "",
        email: "",
        ph_number: "",
        address: "",
        service: "",
        appointment_date: "",
        appointment_time: "",
      });
      setOtp(["", "", "", ""]);
      setOtpSent(false);
      setOtpVerified(false);
      setAgreedToTerms(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to bottom right, #f0f6fa, #ffffff)",
        p: 2,
      }}
    >
      <Helmet>
        <title>
          Book Appointment | Narayan Heart & Maternity Centre, Patna
        </title>
        <meta
          name="description"
          content="Book an online appointment with Dr. Sushant Kumar Pathak (Cardiologist) or Dr. Jagriti Bhardwaj (Gynaecologist) at Narayan Heart & Maternity Centre, Patna."
        />
      </Helmet>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 500,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#30638E" }}
        >
          Book an Appointment
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 3,
            backgroundColor: "#30638E",
            mx: "auto",
            mb: 3,
            borderRadius: 2,
          }}
        />

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
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

          {!otpVerified && (
            <Button
              onClick={handleSendOtp}
              variant="outlined"
              size="small"
              sx={{ mb: 2, borderColor: "#30638E", color: "#30638E" }}
              disabled={otpLoading}
            >
              {otpLoading ? <CircularProgress size={20} /> : "Send OTP"}
            </Button>
          )}

          {otpSent && !otpVerified && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
              {otp.map((digit, index) => (
                <TextField
                  key={index}
                  value={digit}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d?$/.test(val)) {
                      const newOtp = [...otp];
                      newOtp[index] = val;
                      setOtp(newOtp);
                      if (val && index < otp.length - 1) {
                        document
                          .getElementById(`otp-${index + 1}`)
                          ?.focus();
                      }
                    }
                  }}
                  id={`otp-${index}`}
                  inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
                  sx={{ width: 56 }}
                />
              ))}
              <Button
                variant="contained"
                size="small"
                onClick={handleVerifyOtp}
                sx={{
                  backgroundColor: "#30638E",
                  "&:hover": { backgroundColor: "#1A4A6E" },
                }}
              >
                Verify
              </Button>
            </Box>
          )}

          {otpVerified && (
            <Typography sx={{ mb: 2, color: "green", fontWeight: 500 }}>
              ✔ Email Verified
            </Typography>
          )}

          <TextField
            fullWidth
            label="Phone Number"
            name="ph_number" // Corrected
            type="tel"
            required
            value={formData.ph_number} // Corrected
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value) && value.length <= 10) {
                setFormData({ ...formData, ph_number: value }); // Corrected
              }
            }}
            inputProps={{ maxLength: 10 }}
            error={
              formData.ph_number.length > 0 && // Corrected
              formData.ph_number.length < 10 // Corrected
            }
            helperText={
              formData.ph_number.length > 0 && // Corrected
              formData.ph_number.length < 10 // Corrected
                ? "Phone number must be 10 digits."
                : ""
            }
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Appointment Date"
            name="appointment_date" // Corrected
            type="date"
            required
            value={formData.appointment_date} // Corrected
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: today }}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Specialist</InputLabel>
            <Select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <MenuItem value="">Pick a Specialist</MenuItem>
              <MenuItem value="Cardiologist">Cardiologist</MenuItem>
              <MenuItem value="Gynaecologist">Gynaecologist</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Time Slot</InputLabel>
            <Select
              name="appointment_time" // Corrected
              value={formData.appointment_time} // Corrected
              onChange={handleChange}
              required
            >
              <MenuItem value="">Select Time Slot</MenuItem>
              <MenuItem value="09:00 AM - 10:00 AM">
                09:00 AM - 10:00 AM
              </MenuItem>
              <MenuItem value="10:00 AM - 11:00 AM">
                10:00 AM - 11:00 AM
              </MenuItem>
              <MenuItem value="11:00 AM - 12:00 PM">
                11:00 AM - 12:00 PM
              </MenuItem>
              <MenuItem value="12:00 PM - 01:00 PM">
                12:00 PM - 01:00 PM
              </MenuItem>
              <MenuItem value="04:00 PM - 05:00 PM">
                04:00 PM - 05:00 PM
              </MenuItem>
              <MenuItem value="05:00 PM - 06:00 PM">
                05:00 PM - 06:00 PM
              </MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
              />
            }
            label="I confirm all details are correct."
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#30638E",
              color: "white",
              py: 1.2,
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1A4A6E" },
            }}
            disabled={!agreedToTerms || loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Book Appointment"
            )}
          </Button>
        </Box>
      </Paper>

      {/* Success/Error Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle
          sx={{ fontWeight: "bold", color: isError ? "error.main" : "success.main" }}
        >
          {isError ? "Submission Error" : "Appointment Confirmed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{response}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDialogOpen(false)}
            sx={{ color: "#30638E", fontWeight: "bold" }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Processing Dialog */}
      <Dialog open={processingDialogOpen}>
        <DialogTitle>Processing Appointment</DialogTitle>
        <DialogContent sx={{ textAlign: "center", pb: 3 }}>
          <CircularProgress sx={{ my: 2, color: "#30638E" }} />
          <DialogContentText>
            We're securely processing your appointment. <br />
            <strong>Please do not refresh or close the page.</strong>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Appointment;