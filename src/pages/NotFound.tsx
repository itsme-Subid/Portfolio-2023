import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: rgb(var(--light-color));
  & h2 {
    font-size: 5rem;
    font-weight: 700;
  }
`;

const NotFound = () => {
  return (
    <Container className="container">
      <h2>404</h2>
      <p>Page Not Found</p>
    </Container>
  );
};

export default NotFound;
