import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { getSession } from "next-auth/react";
import styled from "styled-components";

const DashboardStyled = styled.div`
  padding-block: 3rem;
`;

const Dashboard = () => {
  return <DashboardStyled className="container">Dashboard</DashboardStyled>;
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return !session
    ? { redirect: { destination: "/login", permanent: false } }
    : { props: { session } };
};

Dashboard.getLayout = function pageLayout(page: ReactElement) {
  return page;
};
