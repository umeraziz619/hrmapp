import React from "react";
import Slider from "./components/Slider";
import Services from "./components/Services";

const legalcon = () => {
  const items = [
    {
      id: 1,
      name: "Economic Significance",
      des: "Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpa",
      img: "https://res.cloudinary.com/dwybftdoj/image/upload/v1682766452/lawapp/wcnezbt3ehl5wktgnnfp.png",
      mylink: "../hrm",
    },
    {
      id: 2,
      name: "Human Rights",
      des: "powerful employees relationship, add your details save your work. aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat.",
      img: "https://res.cloudinary.com/dwybftdoj/image/upload/v1682766630/lawapp/j3s1qasnnm7w3tuww8z2.png",
      mylink: "../hrm",
    },
    {
      id: 3,
      name: "Legal issues",
      des: "we arrange meetings for queries and related consultancy course then let us know your questions that we should help you. Lorem ipsum dolor sit amet.",
      img: "https://res.cloudinary.com/dwybftdoj/image/upload/v1682766630/lawapp/bynzblmjlt27p4ujqhex.png",
      mylink: "../hrm",
    },
  ];

  const legal = "Legal";
  const consultancy = "Consultancy";
  const tdes =
    "A legal consultant is a professional who provides legal guidance to businesses and individuals. This job title is interchangeable with the title of a legal advisor. While those in this role have many of the same responsibilities as lawyers, they solely provide legal advice outside of the courtroom. Common fields they work in include business law, real estate, foreign affairs and financial law. Clients hire legal consultants to ensure that they are making legal decisions and developing business practices that follow the law.";
  const image =
    "relative bg-[url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat";
  return (
    <>
      <Slider image={image} title={legal} red={consultancy} tdes={tdes} />
      <Services items={items} />
    </>
  );
};

export default legalcon;
