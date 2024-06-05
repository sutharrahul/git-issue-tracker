import { Outlet } from "react-router-dom";
import AddGitIssue from "./components/AddGitIssue";

function App() {
  return (
    <>
      <Outlet />
      <AddGitIssue />
    </>
  );
}

export default App;
