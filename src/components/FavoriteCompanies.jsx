import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"

const FavoriteCompanies = () => {
  const myCompanies = useSelector(state => state.favorites.book)
  //questo serve a riprendere le proprietà salvate in initialState
  console.log(myCompanies)
  
  return (
  <Container>
    <Row>
        <Col>
        <h1>Favorites</h1>
        </Col>
    </Row>
    <Row></Row>
  </Container>
  )
}

export default FavoriteCompanies