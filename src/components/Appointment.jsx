/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button as MuiButton,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt,
  FaClock, FaUserMd, FaArrowRight, FaArrowLeft, FaCheckCircle,
  FaShieldAlt, FaHeartbeat, FaFemale, FaCalendarCheck,
} from "react-icons/fa";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const timeSlots = [
  { value: "09:00 AM - 10:00 AM", label: "9 – 10 AM" },
  { value: "10:00 AM - 11:00 AM", label: "10 – 11 AM" },
  { value: "11:00 AM - 12:00 PM", label: "11 – 12 PM" },
  { value: "12:00 PM - 01:00 PM", label: "12 – 1 PM" },
  { value: "04:00 PM - 05:00 PM", label: "4 – 5 PM" },
  { value: "05:00 PM - 06:00 PM", label: "5 – 6 PM" },
];

const specialists = [
  {
    value: "Cardiologist",
    name: "Dr. Sushant Kumar Pathak",
    title: "Interventional Cardiologist",
    image: "skp.webp",
    icon: <FaHeartbeat />,
    color: "#30638E",
  },
  {
    value: "Gynaecologist",
    name: "Dr. Jagriti Bhardwaj",
    title: "Gynecologist & Obstetrician",
    image: "jbp.webp",
    icon: <FaFemale />,
    color: "#3CAEA3",
  },
];

/* ─── Reusable Input ────────────────────── */
const FormInput = ({ icon: Icon, label, error, helperText, ...props }) => (
  <div className="!mb-4">
    <label className="block text-sm font-medium text-gray-700 !mb-1.5">{label}</label>
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
        <Icon />
      </div>
      <input
        className={`w-full !pl-10 !pr-4 !py-3 rounded-xl border ${error ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-[#3CAEA3]/30 focus:border-[#3CAEA3]'
          } bg-white text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 transition-all duration-200`}
        {...props}
      />
    </div>
    {helperText && <p className="text-xs text-red-500 !mt-1 !ml-1">{helperText}</p>}
  </div>
);

/* ─── Step Indicator ────────────────────── */
const StepIndicator = ({ step }) => (
  <div className="flex items-center justify-center gap-3 !mb-8">
    {[1, 2].map((s) => (
      <div key={s} className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= s
              ? 'bg-[#3CAEA3] text-white shadow-md'
              : 'bg-gray-100 text-gray-400'
            }`}
        >
          {step > s ? <FaCheckCircle className="text-xs" /> : s}
        </div>
        <span className={`text-xs font-medium hidden sm:block ${step >= s ? 'text-gray-800' : 'text-gray-400'}`}>
          {s === 1 ? 'Patient Info' : 'Appointment'}
        </span>
        {s === 1 && <div className={`w-8 sm:w-12 h-0.5 rounded-full ${step >= 2 ? 'bg-[#3CAEA3]' : 'bg-gray-200'}`} />}
      </div>
    ))}
  </div>
);

/* ─── Main Component ────────────────────── */
function Appointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ph_number: "",
    address: "",
    service: "",
    appointment_date: "",
    appointment_time: "",
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
  const otpRefs = useRef([]);
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
      setFormData({
        name: "", email: "", ph_number: "", address: "",
        service: "", appointment_date: "", appointment_time: "",
      });
      setOtp(["", "", "", ""]);
      setOtpSent(false);
      setOtpVerified(false);
      setAgreedToTerms(false);
      setStep(1);
    }
  };

  const canGoStep2 =
    formData.name.trim() &&
    formData.email.trim() &&
    otpVerified &&
    formData.ph_number.length === 10 &&
    formData.address.trim();

  const canSubmit =
    agreedToTerms &&
    formData.service &&
    formData.appointment_date &&
    formData.appointment_time &&
    !loading;

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment | Narayan Heart & Maternity Centre, Patna</title>
        <meta
          name="description"
          content="Book an online appointment with Dr. Sushant Kumar Pathak (Cardiologist) or Dr. Jagriti Bhardwaj (Gynaecologist) at Narayan Heart & Maternity Centre, Patna."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#30638E] to-[#1a3d5c] text-white !py-10 sm:!py-14 !px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3CAEA3] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl !mx-auto text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold !mb-2">Book an Appointment</h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl !mx-auto">
            Schedule a visit with our specialist doctors — quick, easy, and secure.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 !py-8 sm:!py-12 !px-4">
        <div className="max-w-5xl !mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

          {/* Left Sidebar (desktop only) */}
          <aside className="hidden lg:block lg:col-span-2 !space-y-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-6">
              <h3 className="font-bold text-gray-800 !mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-[#3CAEA3]" /> Why Book With Us
              </h3>
              <ul className="!space-y-3 text-sm text-gray-600">
                {[
                  'Instant email confirmation',
                  'No registration fee',
                  'Secure OTP-verified booking',
                  '1000+ patients served',
                  'Expert cardiologist & gynecologist',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#3CAEA3] !mt-0.5 flex-shrink-0 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-6">
              <h3 className="font-bold text-gray-800 !mb-3">🕐 Clinic Timings</h3>
              <div className="text-sm text-gray-600 !space-y-1.5">
                <p><strong>Morning:</strong> 9:00 AM – 1:00 PM</p>
                <p><strong>Evening:</strong> 4:00 PM – 6:00 PM</p>
                <p className="text-xs text-gray-400 !mt-2">Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-6">
              <h3 className="font-bold text-gray-800 !mb-3">📍 Location</h3>
              <p className="text-sm text-gray-600">MIG, 245, Lohia Nagar, Kankarbagh, Patna-800020</p>
            </div>
          </aside>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 !p-5 sm:!p-7">
              <StepIndicator step={step} />

              <AnimatePresence mode="wait" custom={step}>
                {step === 1 ? (
                  /* ─── Step 1: Patient Info ─── */
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                  >
                    <h2 className="text-lg font-bold text-gray-800 !mb-5">Patient Information</h2>

                    <FormInput
                      icon={FaUser}
                      label="Full Name"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    {/* Email + OTP */}
                    <div className="!mb-4">
                      <label className="block text-sm font-medium text-gray-700 !mb-1.5">Email Address</label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"><FaEnvelope /></div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={otpVerified}
                          className={`w-full !pl-10 !pr-28 !py-3 rounded-xl border ${otpVerified ? 'border-green-300 bg-green-50' : 'border-gray-200 focus:ring-[#3CAEA3]/30 focus:border-[#3CAEA3]'
                            } text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 transition-all duration-200`}
                        />
                        {/* OTP button inside input */}
                        {!otpVerified && (
                          <button
                            type="button"
                            onClick={handleSendOtp}
                            disabled={otpLoading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#30638E] hover:bg-[#1a4a6e] text-white text-xs font-semibold !px-3 !py-1.5 rounded-lg transition-colors disabled:opacity-50"
                          >
                            {otpLoading ? '...' : otpSent ? 'Resend' : 'Send OTP'}
                          </button>
                        )}
                        {otpVerified && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 flex items-center gap-1 text-xs font-semibold">
                            <FaCheckCircle /> Verified
                          </div>
                        )}
                      </div>
                    </div>

                    {/* OTP Input Row */}
                    {otpSent && !otpVerified && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="!mb-4"
                      >
                        <label className="block text-sm font-medium text-gray-700 !mb-1.5">Enter 4-digit OTP</label>
                        <div className="flex items-center gap-2">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              ref={(el) => (otpRefs.current[index] = el)}
                              value={digit}
                              onChange={(e) => {
                                const val = e.target.value;
                                if (/^\d?$/.test(val)) {
                                  const newOtp = [...otp];
                                  newOtp[index] = val;
                                  setOtp(newOtp);
                                  if (val && index < otp.length - 1) {
                                    otpRefs.current[index + 1]?.focus();
                                  }
                                }
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Backspace' && !digit && index > 0) {
                                  otpRefs.current[index - 1]?.focus();
                                }
                              }}
                              maxLength={1}
                              className="w-12 h-12 text-center text-lg font-bold border border-gray-200 rounded-xl focus:border-[#3CAEA3] focus:ring-2 focus:ring-[#3CAEA3]/30 outline-none transition-all"
                            />
                          ))}
                          <button
                            type="button"
                            onClick={handleVerifyOtp}
                            className="bg-[#3CAEA3] hover:bg-[#2F9E94] text-white text-sm font-semibold !px-4 !py-3 rounded-xl transition-colors !ml-2"
                          >
                            Verify
                          </button>
                        </div>
                      </motion.div>
                    )}

                    <FormInput
                      icon={FaPhone}
                      label="Phone Number"
                      name="ph_number"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.ph_number}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value) && value.length <= 10) {
                          setFormData({ ...formData, ph_number: value });
                        }
                      }}
                      maxLength={10}
                      error={formData.ph_number.length > 0 && formData.ph_number.length < 10}
                      helperText={
                        formData.ph_number.length > 0 && formData.ph_number.length < 10
                          ? "Phone number must be 10 digits."
                          : ""
                      }
                    />

                    <FormInput
                      icon={FaMapMarkerAlt}
                      label="Address"
                      name="address"
                      required
                      placeholder="Your address"
                      value={formData.address}
                      onChange={handleChange}
                    />

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!canGoStep2}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3CAEA3] to-[#2F9E94] hover:from-[#2F9E94] hover:to-[#278A81] text-white font-semibold !py-3 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed !mt-2"
                    >
                      Continue to Appointment
                      <FaArrowRight className="text-sm" />
                    </button>
                  </motion.div>
                ) : (
                  /* ─── Step 2: Appointment Details ─── */
                  <motion.div
                    key="step2"
                    custom={2}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                  >
                    <h2 className="text-lg font-bold text-gray-800 !mb-5">Appointment Details</h2>

                    {/* Doctor Selection Cards */}
                    <div className="!mb-5">
                      <label className="block text-sm font-medium text-gray-700 !mb-2">Select Specialist</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {specialists.map((doc) => (
                          <button
                            key={doc.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: doc.value })}
                            className={`flex items-center gap-3 !p-3.5 rounded-xl border-2 transition-all duration-200 text-left ${formData.service === doc.value
                                ? 'border-[#3CAEA3] bg-[#3CAEA3]/5 shadow-sm'
                                : 'border-gray-100 hover:border-gray-200 bg-white'
                              }`}
                          >
                            <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
                              <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-gray-800 truncate">{doc.name}</p>
                              <p className="text-xs text-gray-500 truncate">{doc.title}</p>
                            </div>
                            {formData.service === doc.value && (
                              <FaCheckCircle className="text-[#3CAEA3] text-sm flex-shrink-0 !ml-auto" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Date Picker */}
                    <div className="!mb-5">
                      <label className="block text-sm font-medium text-gray-700 !mb-1.5">Appointment Date</label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"><FaCalendarAlt /></div>
                        <input
                          type="date"
                          name="appointment_date"
                          required
                          min={today}
                          value={formData.appointment_date}
                          onChange={handleChange}
                          className="w-full !pl-10 !pr-4 !py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#3CAEA3]/30 focus:border-[#3CAEA3] text-sm text-gray-800 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Time Slot Chips */}
                    <div className="!mb-5">
                      <label className="block text-sm font-medium text-gray-700 !mb-2">Select Time Slot</label>
                      <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, appointment_time: slot.value })}
                            className={`!py-2.5 !px-2 rounded-xl text-xs sm:text-sm font-medium border-2 transition-all duration-200 ${formData.appointment_time === slot.value
                                ? 'border-[#3CAEA3] bg-[#3CAEA3] text-white shadow-sm'
                                : 'border-gray-100 text-gray-600 hover:border-gray-200 bg-white'
                              }`}
                          >
                            {slot.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Confirmation Checkbox */}
                    <label className="flex items-start gap-2.5 !mb-5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={() => setAgreedToTerms(!agreedToTerms)}
                        className="!mt-0.5 w-4 h-4 rounded border-gray-300 text-[#3CAEA3] focus:ring-[#3CAEA3]/30"
                      />
                      <span className="text-sm text-gray-600">I confirm all details are correct.</span>
                    </label>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex items-center justify-center gap-1.5 !px-5 !py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        <FaArrowLeft className="text-xs" /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#3CAEA3] to-[#2F9E94] hover:from-[#2F9E94] hover:to-[#278A81] text-white font-semibold !py-3 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <CircularProgress size={20} sx={{ color: 'white' }} />
                        ) : (
                          <>
                            <FaCalendarCheck className="text-sm" />
                            Book Appointment
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Success/Error Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle sx={{ fontWeight: "bold", color: isError ? "error.main" : "success.main" }}>
          {isError ? "Submission Error" : "Appointment Confirmed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{response}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={() => setDialogOpen(false)} sx={{ color: "#30638E", fontWeight: "bold" }}>
            OK
          </MuiButton>
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
    </>
  );
}

export default Appointment;