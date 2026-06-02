import ContactForm from "../components/ContactForm";
import ContactMessage from "../components/ContactMessage";

import PageHero from "../components/pageHero";

const Contact = () => {
  return (
    <div>
      <PageHero
        title={"Get In"}
        highlight={"Touch"}
        description={
          "Ready to start your home modeling project? Contact us today."
        }
      />
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between  flex-wrap md:flex-nowrap py-10 ">
        <ContactForm />
        <ContactMessage/>
        </div>  
      </div>

  );
};
export default Contact;
