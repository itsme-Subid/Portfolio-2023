import styled from "styled-components";
import { db } from "../../firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { BiArrowBack } from "react-icons/bi";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import ReactTimeAgo from "react-time-ago";
import { Link } from "react-router-dom";

TimeAgo.addLocale(en);

const DashboardStyled = styled.div`
  padding-block: 3rem;
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
  & .messages {
    margin-top: 3rem;
    & .message {
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
    }
  }
`;

const Dashboard = () => {
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
      };
    })
    .sort((a, b) => b.createdAt - a.createdAt);
  console.log(messagesList);
  return (
    <DashboardStyled className="container">
      <h1>
        <Link to={"/"}>
          <BiArrowBack />
        </Link>{" "}
        Dashboard
      </h1>
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
          </div>
        ))}
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
