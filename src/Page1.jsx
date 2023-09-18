import { Link, useHistory } from "react-router-dom";
// import { deatilA } from "./Page1DetailA";
// import { deatilB } from "./Page1DetailB";

export const Page1 = () => {
  const history = useHistory();

  const inClickH = () => {
    history.push("/page1/detailA");
  };

  const arr = [...Array(100).keys()];
  return (
    <div>
      <h1>page1</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>deatilA</Link>
      <br />
      <Link to="/page1/detailB">deatilB</Link>
      <button onClick={inClickH}>deatilA</button>
    </div>
  );
};
