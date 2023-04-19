import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { getSession } from "next-auth/react";
import styled from "styled-components";
import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import ReactTimeAgo from "react-time-ago";

TimeAgo.addLocale(en);

const DashboardStyled = styled.div`
  padding-block: 3rem;
`;

const Dashboard = () => {
  const { data: session } = useSession();
  const [messages] = useCollection(session && collection(db, "messages"));
  const message = messages?.docs?.map((doc) => ({
    ...doc.data().message,
    id: doc.id,
  }));
  message?.sort((a, b) => b.createdAt?.seconds! - a.createdAt?.seconds!);
  return (
    <DashboardStyled className="container">
      <h1>
        <Link href={"/"}>
          <BiArrowBack />
        </Link>{" "}
        Dashboard
      </h1>
      <div className="messages">
        {message?.map((message) => {
          const date = message?.createdAt?.toDate();
          return (
            <div className="message" key={message.id}>
              <div className="message-header">
                <h3>{message.name}</h3>
                <p>{message.email}</p>
              </div>
              <p>{message.message}</p>
              <p className="time">
                <ReactTimeAgo date={date} locale="en-US" className="timeago" />
              </p>
            </div>
          );
        })}
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return !session
    ? { redirect: { destination: "/login", permanent: false } }
    : !(session?.user?.email === "itsmesubid@gmail.com")
    ? { redirect: { destination: "/", permanent: false } }
    : { props: { session } };
};

Dashboard.getLayout = function pageLayout(page: ReactElement) {
  return page;
};
