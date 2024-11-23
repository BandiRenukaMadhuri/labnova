import React from "react";
import Banner from "./Banner";
import Menucard from "./Menucard";
import Blog from "./Blog";
import Team from "./Team";
import SubmitForm from "./Submit-form";

const Body = () => {
  return (
    <div className="res-container">
      <Banner />
      <Menucard />
      <Blog />
      <Team />
      <SubmitForm />
      </div>
  )
}
export default Body;