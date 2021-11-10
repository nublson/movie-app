import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { IoReloadOutline } from "react-icons/io5";
import { useApi } from "../../../hooks";
import { Button, Container } from "./styles";

function Heading() {
  const { filter, filterByRevenue, filterPerYear, resetFilter } = useApi();

  const [year, setYear] = useState<number>(0);

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

  useEffect(() => {
    filterPerYear(year);
  }, [year]);

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
          <DatePicker
            showYearPicker
            dateFormat="yyyy"
            dateFormatCalendar=""
            onChange={(date: Date) => setYear(date.getFullYear())}
            customInput={
              <Button
                id="date"
                className={filter === "perYear" ? "active" : ""}
              >
                Top 10 Revenue {!year ? "per Year" : year}
              </Button>
            }
          />
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
