import styled from "styled-components";
import Map from "./Map";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { v4 as uuid } from "uuid";
import { Message } from "../../message";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { object, string, InferType } from "yup";

const Section = styled.section`
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  isolation: isolate;
  transition: 0.15s;
  @media screen and (max-width: 50rem) {
    height: 200vh;
    width: 100% !important;
    flex-direction: column;
    position: relative;
  }
  & .form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 50rem) {
      min-height: 100vh;
      padding-inline: 1rem;
      width: 100%;
    }
    & h2 {
      position: relative;
      color: rgb(var(--light-color));
      font-size: 1.5rem;
      font-weight: 700;
      &::before {
        content: "";
        position: absolute;
        inset: auto 0 -0.1rem 0;
        margin-left: auto;
        width: 1rem;
        height: 0.15rem;
        border-radius: 1rem;
        background-color: rgb(var(--primary-color));
        transition: 0.15s;
      }
      & span {
        color: rgb(var(--primary-color));
      }
    }
    & form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      & input,
      textarea,
      button[type="submit"] {
        padding: 0.75rem 1rem;
        color: rgb(var(--primary-color));
        border: 1px solid rgb(var(--light-color), 0.25);
        background-color: transparent;
        border-radius: 5rem;
        outline: none;
        font-size: 1rem;
        width: 100%;
        transition: 0.15s;
        &::placeholder {
          color: rgb(var(--light-color), 0.5);
          font-size: 0.9rem;
          font-weight: 500;
        }
      }
      & textarea {
        border-radius: 1rem;
        height: 15rem;
        overflow-x: auto;
        resize: vertical;
      }
      & input:focus-visible,
      & textarea:focus-visible {
        border-color: rgb(var(--secondary-color));
      }
      & .alert {
        color: rgb(var(--danger-color), 0.75);
      }
      & button[type="submit"] {
        position: relative;
        font-weight: 600;
        font-size: small;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: rgb(var(--dark-color));
        padding: 0.75rem 1.5rem;
        border-radius: 5rem;
        background-color: rgb(var(--primary-color));
        border: 1px solid rgb(var(--light-color), 0.1);
        cursor: pointer;
        overflow: hidden;
        box-shadow: 0 0.15rem 0.5rem rgb(var(--primary-color), 0.25),
          0 0.25rem 1rem rgb(var(--primary-color), 0.1);
        transition: 0.5s;
        &:hover {
          box-shadow: 0 0 0.75rem rgb(var(--primary-color), 0.25);
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 3rem;
          height: 100%;
          background-color: rgb(var(--light-color), 0.5);
          transform: skewX(-30deg) translateX(-600%);
          transition: 0.75s;
        }
        &:hover::before {
          transform: skewX(-30deg) translateX(2500%);
        }
      }
    }
    & .connect ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      & li {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        color: rgb(var(--light-color));
        border: 1px solid rgb(var(--primary-color), 0.5);
        border-radius: 50%;
        isolation: isolate;
        cursor: pointer;
        transition: all 0.15s;
        &::before {
          content: "";
          position: absolute;
          width: 150%;
          height: 150%;
          transform: translateY(150%);
          background-color: rgb(var(--primary-color));
          border-radius: 50%;
          z-index: -1;
          transition: all 0.5s;
        }
        &:hover {
          color: rgb(var(--dark-color));
          border: 1px solid transparent;
          box-shadow: rgba(255, 255, 255, 0.16) 0px 10px 36px 0px,
            rgba(255, 255, 255, 0.06) 0px 0px 0px 1px;
          &::before {
            transform: translateY(0);
          }
        }
        & a {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
        }
      }
    }
  }
  & .map {
    flex: 1;
    height: 100%;
    z-index: -1;
    @media screen and (max-width: 50rem) {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const uploadMessage = async (message: Message) => {
  await addDoc(collection(db, "messages"), {
    message,
  });
};

const getIp = async () => {
  return await axios.post("/api/getIp").then((res) => res.data.ip);
};

const messageSchema = object({
  name: string().min(2, "Name must be at least 2 characters long").required(),
  email: string().email("Must be a valid email").required("Email is required"),
  message: string()
    .min(2, "Message must be at least 2 characters long")
    .required(),
});
type FormData = InferType<typeof messageSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(messageSchema),
  });
  const addMessage = async ({ name, email, message }: FormData) => {
    if (!message) return;
    const id: string = uuid();
    const ip: string | null = await getIp();
    const data: Message = {
      id,
      ip,
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    };
    uploadMessage(data);
  };
  return (
    <Section className="container" id="contact">
      <div className="form-container">
        <h2>
          Contact <span>Me</span>
        </h2>
        <form onSubmit={handleSubmit(addMessage)}>
          <input type="text" placeholder="Name" {...register("name")} />
          {errors.name && <p className="alert">{errors.name?.message}</p>}
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <p className="alert">{errors.email?.message}</p>}
          <textarea
            placeholder="Message"
            rows={50}
            {...register("message")}
          ></textarea>
          {errors.message && <p className="alert">{errors.message?.message}</p>}
          <button type="submit">Send</button>
        </form>
        <div className="connect">
          <ul className="links">
            <li>
              <a
                href="https://github.com/itsme-Subid"
                target="_blank"
                className="button"
                rel="noopener noreferrer"
                title="Github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/itsme-subid/"
                target="_blank"
                className="button"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <BsLinkedin />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/ItsmeSubid"
                target="_blank"
                className="button"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <BsTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/itsme_subid/"
                target="_blank"
                className="button"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="map">
        <Map />
      </div>
    </Section>
  );
};

export default Contact;
