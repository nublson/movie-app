import { ReactHTMLElement, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import ReactLoading from "react-loading";
import { useApi } from "../../../hooks";
import { MovieData } from "../../../types";
import { Container, Content } from "./styles";

interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

const Popup = ({ id, onClick, ...rest }: PopupProps) => {
  const { getMovieData } = useApi();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState<MovieData>({} as MovieData);

  useEffect(() => {
    getMovieData(id)
      .then((response) => setMovieData(response))
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container {...rest}>
      <Content>
        {loading ? (
          <ReactLoading
            type={"spin"}
            color={"#0B749B"}
            height={30}
            width={30}
          />
        ) : (
          <>
            <div className="header">
              <h2>{movieData.title}</h2>

              <div className="icon" onClick={onClick}>
                <IoClose />
                <span>close</span>
              </div>
            </div>
            <div className="data">
              <div className="section">
                <span className="title">Year</span>
                <p>{movieData.year}</p>
              </div>
              <div className="section">
                <span className="title">Genre</span>
                <p>{movieData.genre}</p>
              </div>
              <div className="section">
                <span className="title">Description</span>
                <p>{movieData.description}</p>
              </div>
              <div className="section-group">
                <div className="section">
                  <span className="title">Director</span>
                  <p className="color">{movieData.director}</p>
                </div>
                <div className="section">
                  <span className="title">Actors</span>
                  <p className="color">{movieData.actors}</p>
                </div>
              </div>
              <div className="section">
                <span className="title">Runtime</span>
                <p>{movieData.runtime} mins</p>
              </div>
              <div className="section">
                <span className="title">Rating</span>
                <p>{movieData.rating}</p>
              </div>
              <div className="section">
                <span className="title">Votes</span>
                <p>{movieData.votes}</p>
              </div>
              <div className="section">
                <span className="title">Revenue</span>
                <p>&#36;{movieData.revenue}</p>
              </div>
              <div className="section">
                <span className="title">Metascore</span>
                <p>{movieData.metascore}</p>
              </div>
            </div>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Popup;
