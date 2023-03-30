import styled from "styled-components";

const Section = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  transition: 0.15s;
  & .form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    & h2 {
      font-size: 2rem;
      font-weight: 600;
      color: rgb(var(--primary-color));
      text-shadow: 0 0 0.75rem rgb(var(--primary-color), 0.25);
    }
    & form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      & input,
      textarea,
      button[type="submit"] {
        padding: 0.5rem;
        border: 1px solid rgb(var(--dark-color), 0.25);
        border-radius: 4px;
        outline: none;
        font-size: 1rem;
        width: 100%;
        transition: 0.15s;
      }
      & textarea {
        height: 10rem;
        overflow-x: auto;
        resize: vertical;
      }
      & input:focus-visible,
      & textarea:focus-visible {
        border-color: rgb(var(--secondary-color));
      }
      & button[type="submit"] {
        background-color: rgb(var(--secondary-color));
        border: none;
        outline: none;
        color: rgb(var(--light-color));
        &:hover,
        &:focus-visible {
          background-color: rgb(var(--secondary-color), 0.8);
        }
      }
    }
  }
  & .map {
    flex: 1;
  }
`;

const Contact = () => {
  return (
    <Section className="container" id="contact">
      <div className="form-container">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows={50}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="map"></div>
    </Section>
  );
};

export default Contact;
