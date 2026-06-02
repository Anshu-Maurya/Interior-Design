import { contactInfo,socialLinks } from "../assets/DesignHaven-Assets/contactData";
function ContactForm() {
  return (
    <div className="py-24 bg-white">
      {/* container */}
      <h2 className="font-bold font-heading text-3xl pl-10 mb-5 text-gray-800">
        Contact
        <span className="text-accent"> Information</span>
      </h2>
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {contactInfo.map((item, id) => (
          <div key={id}>
            <div className="flex gap-4 items-center">
              {/* icon */}
              <div className="p-3 rounded-full bg-accent">
                <item.icon className="text-white" />
              </div>
              {/* data */}
              <div>
                {/* title*/}
                <h2 className="font-heading text-gray-700">{item.title}</h2>
                {/* value */}
                <p className="text-gray-800 max-w-sm">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
        {/* social links */}
        <h2 className="text-3xl font-bold font-heading mb-3">Follow Us</h2>
        <div className="flex gap-4">
        {
            socialLinks.map((item,id)=>(
                <div key={id}>
                    <div className=" p-4 bg-accent rounded-full cursor-pointer hover:bg-accent/70 transition-all">
                        <item.icon/>
                    </div>
                </div>
            ))

        }
        </div>

      </div>
    </div>
  );
}
export default ContactForm;
