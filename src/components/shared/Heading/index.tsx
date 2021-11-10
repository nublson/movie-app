import { useEffect, useState } from "react";
import { IoReloadOutline } from "react-icons/io5";
import { useApi } from "../../../hooks";
import { Button, Container } from "./styles";

function Heading() {
  const { filter, filterByRevenue, filterPerYear, resetFilter } = useApi();

  const [, setIsFilteredByRevenue] = useState(false);
  const [, setIsFilteredPerYear] = useState(false);

  useEffect(() => {
    if (filter === "none") {
      setIsFilteredByRevenue(false);
      setIsFilteredPerYear(false);
    }

    if (filter === "byRevenue") {
      setIsFilteredByRevenue(true);
      setIsFilteredPerYear(false);
    }

    if (filter === "perYear") {
      setIsFilteredByRevenue(false);
      setIsFilteredPerYear(true);
    }
  }, [filter]);

  return (
    <Container>
      <h1>Movie ranking</h1>

      <div className="filters">
        <div className="buttons">
          <Button
            className={filter === "byRevenue" ? "active" : ""}
            onClick={() => filterByRevenue()}
          >
            Top 10 Revenue
          </Button>
          <Button
            className={filter === "perYear" ? "active" : ""}
            onClick={() => filterPerYear(2006)}
          >
            Top 10 Revenue per Year
          </Button>
        </div>

        {filter !== "none" && (
          <IoReloadOutline
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => {
              resetFilter();
            }}
          />
        )}
      </div>
    </Container>
  );
}

export default Heading;
