import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="scroll-m-20 pb-2 md:text-3xl text-xl">
        I will be happy to work with you.
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactCard
          image="/images/alex.png"
          logo="/logo/linkedin5.svg"
          name="Alexandre Compin"
          description="Profile on LinkedIn."
          url="https://www.linkedin.com/in/alexandre-compin-062a03177/"
        />
        <ContactCard
          image="/images/alex.png"
          logo="/logo/whatsappcontact.svg"
          name="+33 6 18 25 07 58"
          description="Contact me on WhatsApp."
          url="https://wa.me/33618250758"
        />
        <ContactCard
          image="/images/alex.png"
          logo="/logo/gmail5.svg"
          name="alexandrecompin@gmail.com"
          description="Email me for inquiries."
          url="mailto:alexandrecompin@gmail.com?subject=Demande%20d%27information&body=Bonjour,%0D%0AJe%20souhaite%20avoir%20plus%20d%27informations."
        />
        <ContactCard
          image="/images/alex.png"
          logo="/logo/phone.svg"
          name="06 18 25 07 58"
          description="Contact me on my phone."
          url=""
        />
      </div>
    </div>
  );
};
