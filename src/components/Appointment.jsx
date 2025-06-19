/* eslint-disable no-unused-vars */
import { useState } from "react";
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
  Grid,
} from "@mui/material";
import axios from "axios";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    service: "",
    appointmentDate: "",
    timeSlot: "",
  });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [processingDialogOpen, setProcessingDialogOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = async () => {
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      setOtpLoading(true);
      const res = await axios.post(`${backendURL}/send-otp`, {
        email: formData.email,
      });
      setOtpSent(true);
      setResponse(res.data.message);
      setOtpDialogOpen(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP. Try again.");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      alert("Enter the complete 4-digit OTP.");
      return;
    }
    try {
      const res = await axios.post(`${backendURL}/verify-otp`, {
        email: formData.email,
        otp: enteredOtp,
      });
      setOtpVerified(true);
      setOtpDialogOpen(false);
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
      const result = await axios.post(`${backendURL}/book`, formData);
      setResponse(result.data.message || "Appointment booked successfully!");
      setIsError(false);
    } catch (err) {
      console.log(err);
      setResponse("Error booking appointment. Please try again.");
      setIsError(true);
    } finally {
      setProcessingDialogOpen(false);
      setDialogOpen(true);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        service: "",
        appointmentDate: "",
        timeSlot: "",
      });
      setOtp(["", "", "", ""]);
      setOtpSent(false);
      setOtpVerified(false);
      setAgreedToTerms(false);
    }
  };

  const handleDialogClose = () => setDialogOpen(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={2}
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 450, width: "100%" }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Book an Appointment
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
            sx={{ mb: 1 }}
          />

          {!otpVerified && (
            <Box sx={{ mb: 2 }}>
              <Button
                onClick={handleSendOtp}
                variant="outlined"
                disabled={otpLoading}
              >
                {otpLoading ? <CircularProgress size={20} /> : "Verify Email"}
              </Button>
            </Box>
          )}

          {otpSent && !otpVerified && (
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d?$/.test(val)) {
                      const newOtp = [...otp];
                      newOtp[index] = val;
                      setOtp(newOtp);

                      // Move to next input if not last and value entered
                      if (val && index < otp.length - 1) {
                        document.getElementById(`otp-${index + 1}`)?.focus();
                      }
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !otp[index] && index > 0) {
                      document.getElementById(`otp-${index - 1}`)?.focus();
                    }
                  }}
                  maxLength={1}
                  id={`otp-${index}`}
                  style={{
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    fontSize: "18px",
                    margin: "0 5px",
                  }}
                />
              ))}

              <Button variant="contained" onClick={handleVerifyOtp}>
                Verify
              </Button>
            </Box>
          )}

          {otpVerified && (
            <Typography color="green" sx={{ mb: 2 }}>
              ✔ Email Verified
            </Typography>
          )}

          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            required
            value={formData.phoneNumber}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value) && value.length <= 10) {
                setFormData({ ...formData, phoneNumber: value });
              }
            }}
            inputProps={{ maxLength: 10 }}
            error={
              formData.phoneNumber.length > 0 &&
              formData.phoneNumber.length < 10
            }
            helperText={
              formData.phoneNumber.length > 0 &&
              formData.phoneNumber.length < 10
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
            name="appointmentDate"
            type="date"
            required
            value={formData.appointmentDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            inputProps={{ min: today }}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>What Do You Need Help With?</InputLabel>
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
              name="timeSlot"
              value={formData.timeSlot}
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
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#30638E",
              color: "white",
              mt: 2,
              "&:hover": { backgroundColor: "#1A4A6E" },
            }}
            disabled={!agreedToTerms || loading}
          >
            {loading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              "Book Appointment"
            )}
          </Button>
        </Box>
      </Paper>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>
          {isError ? "Submission Error" : "Appointment Confirmed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{response}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={processingDialogOpen}>
        <DialogTitle>Thanks for your patience!</DialogTitle>
        <DialogContent sx={{ textAlign: "center", pb: 3 }}>
          <CircularProgress sx={{ my: 2 }} />
          <DialogContentText>
            We're securely processing your appointment—this may take up to 50
            seconds. <br />
            <strong>Please do not refresh or close the page.</strong>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Appointment;
