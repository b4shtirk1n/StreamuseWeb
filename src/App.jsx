import Header from "../components/header";
import "../styles/app.scss";

export default function App() {
  return (
    <>
      <Header />
      <section>
        <div className="container main">
          <p>
            СЛУШАЙ СВОЮ
            <p>
              <a>ЛЮБИМУЮ</a> МУЗЫКУ
            </p>
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2></h2>
        </div>
      </section>
      <section>
        <div className="container">
          <h2></h2>
        </div>
      </section>
      <section>
        <div className="container">
          <h2></h2>
        </div>
      </section>
    </>
  );
}
