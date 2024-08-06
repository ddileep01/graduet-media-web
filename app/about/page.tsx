import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Hola, We Are The Team Behind Graduet Media consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat"
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
