import React from "react";
import { IssueIteam, Navbar, Searchbar } from "./components";

function HomePage() {
  return (
    <>
      <Searchbar />
      <Navbar />
      <IssueIteam />
      <IssueIteam />
      <IssueIteam />
    </>
  );
}

export default HomePage;
