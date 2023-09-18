import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>page2</h1>
      <Link to="page2/100">URL parameter </Link>
      <br />
      <Link to="page2/100?name=hogehoge">Query parameter </Link>
    </div>
  );
};
