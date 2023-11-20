import Header from "../components/header";
import "../styles/app.scss";

export default function App() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <h1>bar</h1>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>bar</h2>
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
