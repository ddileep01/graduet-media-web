import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const teamMembers = [
  {
    name: "ANIK JAIN",
    role: "Founder & CEO, DZINR",
    image: "images/logo/gm-website-logo.svg",
  },
  {
    name: "PANIKAJ",
    role: "Designer",
    image: "images/logo/gm-website-logo.svg",
  },
  {
    name: "NIRANJAN",
    role: "Designer",
    image: "images/logo/gm-website-logo.svg",
  },
  {
    name: "ATHARVA",
    role: "Video Editor",
    image: "images/logo/gm-website-logo.svg",
  },
  {
    name: "PARTH RANA",
    role: "Manager",
    image: "images/logo/gm-website-logo.svg",
  },
  {
    name: "AKASH",
    role: "Designer",
    image: "images/logo/gm-website-logo.svg",
  },
  {
    name: "AZEEM",
    role: "Designer",
    image: "images/logo/gm-website-logo.svg",
  },
  {
    name: "MOOSA",
    role: "Designer",
    image: "images/logo/gm-website-logo.svg",
  },
  {
    name: "SHAURYA",
    role: "Designer",
    image: "images/logo/gm-website-logo.svg",
  },
];

const AboutSectionOne = () => {
  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between mx-24 mb-12">
          <div>
            <div className="w-32 h-32 mb-4">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="rounded-full"
                width={128}
                height={128}
              />
            </div>
            <h2 className="text-xl font-bold">{teamMembers[0].name}</h2>
            <p className=" mt-2 text-sm">{teamMembers[0].role}</p>
          </div>
          <p className="mt-4 max-w-2xl">
            Brands struggle to establish a unique and captivating visual
            identity, restricting themselves from standing out in a crowded
            marketplace. At DZINR, we specialize in designing effective logos,
            brand identities, and packaging materials. By combining creativity,
            strategic thinking, and expert craftsmanship, we empower brands to
            convey unique stories and values through captivating designs. Our
            collaborative approach ensures that each brand receives personalized
            attention and a tailored solution that captures its essence. Our
            vision is to transform brands ideas into compelling visuals that
            resonate with their target audience.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-full"
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
