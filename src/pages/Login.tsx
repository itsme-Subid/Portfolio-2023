import styled from "styled-components";
import Layout from "../layout/loginLayout";
import google from "/img/google.webp";
import github from "/img/github.webp";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIdToken } from "react-firebase-hooks/auth";

const SigninStyled = styled.div`
  padding: 3rem;
  display: grid;
  place-items: center;
  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 2rem;
    & li {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 3rem;
      border: 1px solid rgb(var(--light-color), 0.5);
      border-radius: 1rem;
      cursor: pointer;
      transition: all 0.15s;
      &::before {
        content: "";
        position: absolute;
        width: 150%;
        height: 150%;
        transform: translateY(150%);
        background-color: rgb(var(--secondary-color), 0.1);
        border-radius: 50%;
        z-index: 0;
        transition: all 0.5s;
      }
      &:hover {
        border: 1px solid transparent;
        box-shadow: rgb(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgb(0, 0, 0, 0.06) 0px 0px 0px 1px;
        &::before {
          transform: translateY(0);
        }
      }
      &:active {
        border: 1px solid rgb(var(--light-color), 0.5);
      }
      & img {
        @media screen and (max-width: 50rem) {
          width: 3rem;
          height: 3rem;
        }
      }
      & span.authenticator {
        text-transform: capitalize;
      }
      & > * {
        z-index: 1;
      }
    }
  }
`;

const Signin = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const [user] = useIdToken(auth);
  // google handler function
  async function handleGoogleLogin() {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }
  // github handler function
  async function handleGithubLogin() {
    try {
      await signInWithRedirect(auth, githubProvider);
    } catch (error) {
      console.log(error);
    }
  }
  const login = [
    {
      label: "google",
      function: handleGoogleLogin,
      image: google,
      width: 60,
      height: 60,
    },
    {
      label: "github",
      function: handleGithubLogin,
      image: github,
      width: 60,
      height: 60,
    },
  ];
  useEffect(() => {
    if (user?.email === "itsmesubid@gmail.com") navigate("/dashboard");
  }, [navigate, user]);
  return (
    <Layout>
      <SigninStyled>
        {/* <Head>
          <title>LOGIN | DEVSUBID 🚀</title>
        </Head> */}
        <ul>
          {login.map((item, index) => (
            <li key={index} onClick={() => item.function()}>
              <img
                src={item.image}
                alt={item.label}
                height={item.height}
                width={item.width}
              />
              <span>
                Login with <span className="authenticator">{item.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </SigninStyled>
    </Layout>
  );
};

export default Signin;
