import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const history = useHistory();
  const returnOnc = () => {
    history.goBack();
  };

  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={returnOnc}>も</button>
    </div>
  );
};
