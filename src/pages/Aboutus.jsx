import { Box, Paper, Typography, Divider } from "@mui/material";

function Aboutus() {
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
          maxWidth: 800,
          width: "100%",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h3" textAlign="center" gutterBottom>
          About Us
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" paragraph textAlign="justify">
          Welcome to <strong>Narayan Heart and Maternity Center</strong>, where your heart and health are at the center of everything we do. We are a multi-specialty clinic committed to providing exceptional care in both <strong>Cardiology</strong> and <strong>Gynecology</strong>, under one trusted roof.
        </Typography>

        <Typography variant="body1" paragraph textAlign="justify">
          Founded on the principles of compassion, expertise, and personalized care, our clinic is designed to meet the unique health needs of every individual. Whether you're seeking preventive heart care, management for a cardiovascular condition, or comprehensive women's health services, our team of highly skilled specialists is here to guide and support you every step of the way.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          To provide patient-centered, evidence-based medical care in a warm and respectful environment, empowering individuals to lead healthier, fuller lives.
        </Typography>

        <Typography variant="h5" gutterBottom>
          What We Offer
        </Typography>

        <Typography variant="h6" gutterBottom>
          Cardiology Services
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          Led by experienced cardiologists, we offer a wide range of heart care services including diagnostic testing (ECG, Echo, Stress Testing), hypertension and cholesterol management, arrhythmia treatment, and long-term cardiac care. Our goal is to not only treat heart conditions but to help prevent them through early detection and education.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Gynecology Services
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          Our gynecology team provides compassionate care across all stages of a woman’s life—from adolescence through menopause. Services include annual exams, prenatal and postnatal care, fertility counseling, hormonal therapy, and treatment of gynecologic conditions. We focus on creating a safe and supportive space for women to receive high-quality, confidential care.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          <strong>Experienced Specialists:</strong> Our doctors bring decades of combined clinical expertise. <br />
          <strong>Comprehensive Care:</strong> Access to both heart and women’s health services in one convenient location. <br />
          <strong>Advanced Technology:</strong> We use the latest diagnostic tools and treatments to ensure accurate, effective care. <br />
          <strong>Patient-Focused Approach:</strong> We listen, we care, and we treat each patient like family.
        </Typography>

        <Typography variant="body1" paragraph textAlign="justify">
          At Narayan Heart and Maternity Center, your health journey matters to us. Let us be your partner in wellness, today and always.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Aboutus;
