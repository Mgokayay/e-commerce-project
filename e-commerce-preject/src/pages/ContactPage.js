import ContactComm from "../components/ContactPageComp/ContactComm";
import ContactCta from "../components/ContactPageComp/ContactCta";
import ContactHeader from "../components/ContactPageComp/ContactHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContactHeader />
      <ContactComm />
      <ContactCta />
      <Footer />
    </>
  );
};

export default ContactPage;
