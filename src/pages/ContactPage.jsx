import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact us</h1>
      <form action="" className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email"/>
        <label htmlFor="question">Question</label>
        <textarea name="question" id="question" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
