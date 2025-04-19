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
} from "@mui/material";
import axios from "axios";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    appointmentDate: "",
    timeSlot: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(`${backendURL}/appointments`, formData);
      setResponse(result.data.message || "Appointment booked successfully!");
      setIsError(false);
    } catch (err) {
      console.log(err)
      setResponse("Error booking appointment. Please try again.");
      setIsError(true);
    } finally {
      setDialogOpen(true);
      setLoading(false);
      setFormData({
        name: "",
        phoneNumber: "",
        address: "",
        appointmentDate: "",
        timeSlot: "",
      });
      setAgreedToTerms(false);
    }
  }

  const handleDialogClose = () => setDialogOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 450,
          width: "100%",
          backgroundColor: "white",
          borderRadius: "12px",
        }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom>
          Book an Appointment
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" required value={formData.name} onChange={handleChange} sx={{ mb: 2 }} />
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
            error={formData.phoneNumber.length > 0 && formData.phoneNumber.length < 10}
            helperText={
              formData.phoneNumber.length > 0 && formData.phoneNumber.length < 10
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
            <InputLabel>Time Slot</InputLabel>
            <Select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
              <MenuItem value="">Select Time Slot</MenuItem>
              <MenuItem value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</MenuItem>
              <MenuItem value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</MenuItem>
              <MenuItem value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</MenuItem>
              <MenuItem value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</MenuItem>
              <MenuItem value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</MenuItem>
              <MenuItem value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={<Checkbox checked={agreedToTerms} onChange={() => setAgreedToTerms(!agreedToTerms)} />}
            label="I confirm all details are correct."
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#26415E", color: "white", "&:hover": { backgroundColor: "#4A6B8A" } }}
            disabled={!agreedToTerms || loading}
          >
            {loading ? <CircularProgress size={24} color="primary" /> : "Book Appointment"}
          </Button>
        </Box>
      </Paper>

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{isError ? "Submission Error" : "Appointment Confirmed"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{response}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Appointment;
