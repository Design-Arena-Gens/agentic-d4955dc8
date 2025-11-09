"use client";

type FormElements = HTMLFormElement & {
  reset: () => void;
};

export function ContactForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget as FormElements;
        const data = new FormData(form);
        const name = data.get("name") as string;
        alert(`Thank you ${name}! हम जल्द ही आपसे संपर्क करेंगे।`);
        form.reset();
      }}
    >
      <div className="input-group">
        <label htmlFor="name">Name | नाम</label>
        <input id="name" name="name" placeholder="Your name | आपका नाम" required />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone | फ़ोन</label>
        <input id="phone" name="phone" placeholder="+91 XXXXX XXXXX" pattern="^[0-9+\\s-]{8,}$" required />
      </div>
      <div className="input-group">
        <label htmlFor="service">Service Needed | आवश्यक सेवा</label>
        <select id="service" name="service" defaultValue="Electrical Wiring">
          <option>Electrical Wiring</option>
          <option>Appliance Repair</option>
          <option>Installation</option>
          <option>Maintenance</option>
          <option>Emergency Callout</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="message">Issue Details | समस्या विवरण</label>
        <textarea id="message" name="message" rows={4} placeholder="Describe your issue | समस्या का विवरण लिखें" />
      </div>
      <button className="primary-btn" type="submit">
        Submit Request | अनुरोध भेजें
      </button>
    </form>
  );
}
