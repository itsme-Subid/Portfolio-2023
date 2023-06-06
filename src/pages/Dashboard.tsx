import styled from "styled-components";
import { auth, db } from "../../firebase";
import { useIdToken, useSignOut } from "react-firebase-hooks/auth";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { BiArrowBack } from "react-icons/bi";
import { MdDelete, MdDeleteOutline, MdOutlineLogout } from "react-icons/md";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";
import { useState } from "react";

TimeAgo.addLocale(en);

const DashboardStyled = styled.div`
  padding-block: 3rem;
  min-height: 100vh;
  & header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      display: flex;
      align-items: center;
      gap: 1rem;
      & a {
        display: flex;
        align-items: center;
        & svg {
          font-size: 2rem;
        }
      }
    }
    & .img-wrapper {
      width: 3rem;
      height: 3rem;
      border: 0.25rem solid transparent;
      border-radius: 50%;
      overflow: hidden;
      transition: 0.15s;
      & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
        object-position: center;
        cursor: pointer;
      }
      &:hover {
        border: 0.25rem solid rgb(var(--light-color), 0.15);
      }
    }
    & .user {
      position: absolute;
      top: 3rem;
      right: 0;
      padding: 0.5rem;
      transform: scale(0);
      transform-origin: right top;
      opacity: 0;
      background-color: rgb(var(--dark-color));
      border: 1px solid rgb(var(--light-color), 0.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border-radius: 1rem;
      transition: 0.15s;
      z-index: 1;
      &.active {
        transform: scale(1);
        opacity: 1;
      }
      & .user-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        background-color: rgb(var(--light-color), 0.05);
        border-radius: 0.75rem;
        transition: 0.15s;
        &:hover {
          background-color: rgb(var(--light-color), 0.1);
        }
        & img {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
        }
        & .user-data {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 0.15rem;
          & h2 {
            font-size: 1rem;
          }
          & p {
            font-size: 0.9rem;
            font-weight: 300;
            color: rgb(var(--light-color), 0.75);
          }
        }
      }
      & .logout {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 1.5rem;
        padding-bottom: 0.75rem;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
  & .messages {
    margin-top: 3rem;
    & .message {
      position: relative;
      padding: 2.5rem 2rem;
      border-radius: 0.5rem;
      color: rgb(var(--light-color));
      background-color: rgb(var(--secondary-color), 0.25);
      box-shadow: 0 0 0.5rem rgb(var(--secondary-color), 0.1);
      margin-bottom: 1rem;
      & .message-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & h3 {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          & a {
            font-size: 0.9rem;
            font-weight: 300;
          }
        }
        & span.delete-button {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          cursor: pointer;
          &:hover {
            color: rgb(var(--danger-color));
            & svg:nth-child(1) {
              display: none;
            }
            & svg:nth-child(2) {
              display: block;
            }
          }
          & svg:nth-child(2) {
            display: none;
          }
        }
      }
      & .message-body {
        position: relative;
        & .date {
          position: absolute;
          bottom: -1.25rem;
          right: 0;
          font-size: 0.8rem;
          font-weight: 300;
        }
      }
      & .user-device-description {
        position: absolute;
        top: 4.5rem;
        left: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
        transform: scale(0);
        transform-origin: top left;
        opacity: 0;
        z-index: 1;
        background-color: rgb(var(--dark-color));
        border-radius: 1rem;
        border: 1px solid rgb(var(--light-color), 0.1);
        transition: 0.15s;
        & p {
          font-size: 0.8rem;
          font-weight: 300;
        }
      }
      & .message-header:hover ~ .user-device-description,
      & .message-body:hover ~ .user-device-description:hover,
      & .user-device-description:hover {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`;

const Dashboard = () => {
  const [setting, setSetting] = useState<boolean>(false);
  const [user] = useIdToken(auth);
  const [signOut] = useSignOut(auth);
  const [messages] = useCollection(collection(db, "messages"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const messagesList = messages?.docs
    .map((doc) => {
      const message = doc.data().message;
      return {
        id: doc.id,
        ip: message.ip,
        name: message.name,
        email: message.email,
        message: message.message,
        createdAt: message.createdAt?.toDate(),
        deviceDescription: message.deviceDescription,
      };
    })
    .sort((a, b) => b.createdAt - a.createdAt);
  return (
    <DashboardStyled className="container">
      <header>
        <h1>
          <Link to={"/"}>
            <BiArrowBack />
          </Link>{" "}
          <span>Dashboard</span>
        </h1>
        {user?.photoURL && user?.displayName && (
          <>
            <div
              className="img-wrapper"
              onClick={() => setSetting((prev) => !prev)}
            >
              <img src={user?.photoURL} alt={user?.displayName} />
            </div>
            <div className={`user ${setting && "active"}`}>
              <div className="user-info">
                <img src={user?.photoURL} alt={user?.displayName} />
                <div className="user-data">
                  <h2>{user?.displayName}</h2>
                  <p>{user?.email}</p>
                </div>
              </div>
              <button className="logout" onClick={async () => await signOut()}>
                <MdOutlineLogout />
                <span>Sign Out</span>
              </button>
            </div>
          </>
        )}
      </header>
      <div className="messages">
        {messagesList?.map((message) => (
          <div className="message" key={message.id}>
            <div className="message-header">
              <h3>
                <span>{message.name}</span>
                <a href={`mailto:${message.email}`}>{message.email}</a>
              </h3>
              <span>{message.ip && `IP addresss: ${message.ip}`}</span>
              <span
                className="delete-button"
                onClick={() => deleteDoc(doc(db, "messages", message.id))}
              >
                <MdDeleteOutline />
                <MdDelete />
              </span>
            </div>
            <div className="message-body">
              <p>{message.message}</p>
              <p className="date">
                <ReactTimeAgo date={message.createdAt} />
              </p>
            </div>
            <div className="user-device-description">
              {message.deviceDescription.map((info: string | null) => (
                <p key={info}>{info}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
