import React from "react";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import Image from "next/legacy/image";


const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "James Nduku",
      role: "Marketing Coordinator",
      socialLinks: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        website: "https://jamesnduku.com",
      },
      image: "/images/team1.svg",
    },
    {
      name: "Joseph Munyambu",
      role: "Nursing Assistant",
      socialLinks: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        website: "https://josephmunyambu.com",
      },
      image: "/images/team2.svg",
    },
    {
      name: "Joseph Ngumbau",
      role: "Medical Assistant",
      socialLinks: {
        linkedin: "https://linkedin.com/in/alexjohnson",
        twitter: "https://twitter.com/alexjohnson",
        website: "https://josephngumbau.com",
      },
      image: "/images/team3.svg",
    },
    {
      name: "Erick Kipkemboi",
      role: "Web Designer",
      socialLinks: {
        linkedin: "https://linkedin.com/in/mariagarcia",
        twitter: "https://twitter.com/mariagarcia",
        website: "https://erickkipkemboi.com",
      },
      image:"/images/team4.svg",
    },
    {
      name: "Stephen Kerubo",
      role: "President of Sales",
      socialLinks: {
        linkedin: "https://linkedin.com/in/davidlee",
        twitter: "https://twitter.com/davidlee",
        website: "https://stephenkerubo.com",
      },
      image:"/images/team5.svg",
    },
    {
      name: "John Leboo",
      role: "Dog Trainer",
      socialLinks: {
        linkedin: "https://linkedin.com/in/saradavis",
        twitter: "https://twitter.com/saradavis",
        website: "https://johnleboo.com",
      },
      image: "/images/team6.svg",
    },
  ];

  return (
    <section className="mx-auto px-4 py-16 bg-[#F7F7F7]">
      <div className="text-center mb-12">
        <h2 className="text-[38px] font-bold text-[#000000]">Our Team</h2>
        <p className="text-[20px] text-[#000000] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-6 text-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between"
          >
            {/* Image */}
            <div className="w-32 h-32 mx-auto mb-4 flex justify-center items-center">
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>

            {/* Name and Role */}
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-[20px] font-bold text-[#000000]">{member.name}</h3>
              <p className="text-[18px] text-[#555555]">{member.role}</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4 py-4">
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000] hover:text-gray-700"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000] hover:text-gray-700"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={member.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000] hover:text-gray-700"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;