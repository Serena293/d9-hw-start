import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const FavoriteCompanies = () => {
  const myCompanies = useSelector((state) => state.favorites.book);
  // Log for debugging
  console.log(myCompanies);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Favorites</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {myCompanies.length > 0 ? (
            <ListGroup>
              {myCompanies.map((company, index) => (
                <ListGroup.Item key={index}>{company}</ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No favorite companies yet!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteCompanies;
