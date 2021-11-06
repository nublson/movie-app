import { Container } from "./styles";

function Heading() {
  return (
    <Container>
      <h1>Movie ranking</h1>

      <div className="filters">
        <button>Top 10 Revenue</button>
        <button>Top 10 Revenue per Year</button>
      </div>
    </Container>
  );
}

export default Heading;
