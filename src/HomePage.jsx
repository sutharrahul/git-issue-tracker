import React from "react";
import { IssueItem, Navbar, Searchbar } from "./components";

function HomePage() {
  return (
    <>
      <Searchbar />
      <Navbar />
      <IssueItem />
    </>
  );
}

export default HomePage;
