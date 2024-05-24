import ContactForm from "@/components/form";

export default function Contact() {

  return (
    <div className="p-2 text-gray-600">
      <div className="mb-8">
        <h1 className="text-xl font-bold underline mb-4 text-center">
          Find Us At
        </h1>
        <p className="mb-4">
          The Elgar Centre 1A High Street, Upton Northampton, NN5 4EN United
          Kingdom.
        </p>
        <img src="/map.png" alt="map" />
      </div>

      <div className="w-full mb-4">
        <h1 className="text-xl font-bold underline mb-4 text-center">
          Contact Us
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
