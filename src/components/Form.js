const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="Type your message here"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
