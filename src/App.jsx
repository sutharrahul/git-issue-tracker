import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import IssueDetailPage from "./IssueDetailPage";

function App() {
  return (
    <>
      {/* <HomePage />
      <IssueDetailPage /> */}
      <Outlet />
    </>
  );
}

export default App;
