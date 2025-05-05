import React from "react";

// Doctor data array
const doctors = [
  {
    name: "Dr. Sushant Kumar Pathak",
    specialty: "Interventional Cardiologist",
    image: "skp.jpg",
    about:
      "Dr. Sushant Kumar Pathak is a highly accomplished Interventional Cardiologist with a strong academic and clinical background. A Gold Medalist in MD (Medicine) from PMCH Patna, he also holds an MBBS from Kolkata and a DM in Cardiology from IGP, ME & R. With years of experience in interventional procedures, Dr. Pathak currently serves as a Senior Consultant at Ford Hospital, Patna, and is the Assistant Director at IGIC, PMCH. Known for his precision, leadership, and dedication to patient care, he is committed to advancing cardiovascular health through both innovation and compassionate service.",
  },
  {
    name: "Dr. Jagriti Bhardwaj",
    specialty: "Gynecologist & Obstetrician",
    image: "jbp.png",
    about:
      "Dr. Jagriti Bhardwaj is a distinguished Gynecologist & Obstetrician specializing in laparoscopic surgery and infertility treatment. She earned her MBBS from SNMC, Agra, followed by an MS in Obstetrics and Gynecology from PGIMS and a DNB in the same field. Dr. Bhardwaj has trained and worked at top institutions including Sir Ganga Ram Hospital, New Delhi, and has served as Ex. Assistant Professor at HIMS, Dehradun. With a passion for women's health and minimally invasive techniques, she brings both technical excellence and patient-centered care to every clinical interaction.",
  },
];

const NewDoc = () => {
  return (
    <div className="flex flex-col gap-10 !py-10">
      {doctors.map((doc, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-center gap-10 items-center !py-20 !px-6 bg-[#C00008]"
        >
          <img
            src={`/${doc.image}`}
            alt={`Portrait of ${doc.name}`}
            className="w-full md:w-2/5 h-auto rounded-md transition duration-300 transform hover:scale-105 drop-shadow-[0_0_10px_white]"
          />

          <div className="w-full md:w-2/5 text-white overflow-auto">
            <h1 className="text-3xl md:text-5xl font-bold !mb-3">{doc.name}</h1>
            <h2 className="text-xl md:text-2xl font-semibold !mb-4">{doc.specialty}</h2>
            <p className="text-base md:text-lg">{doc.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewDoc;
