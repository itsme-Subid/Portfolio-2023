import styled from "styled-components";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { BiArrowBack } from "react-icons/bi";
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
    }
  }
`;

const Dashboard = () => {
  const [messages] = useCollection(collection(db, "messages"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const messagesList = messages?.docs.map((doc) => {
    const message = doc.data().message;
    return {
      id: doc.id,
      name: message.name,
      email: message.email,
      message: message.message,
      createdAt: message.createdAt?.toDate(),
    };
  });
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
              <h3>{message.name}</h3>
              <span>
                <ReactTimeAgo date={message.createdAt} />
              </span>
              <a href={`mailto:${message.email}`}>{message.email}</a>
            </div>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
