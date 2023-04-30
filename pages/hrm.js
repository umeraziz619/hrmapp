import React from 'react'
import Slider from './components/Slider';
import Services from './components/Services';
const items = [
  { id: 1, name: 'HR Outsoucing',des: "Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpa",img:"https://www.schellhammerbusinessschool.com/wp-content/uploads/Online-Human-Resource-Management.jpg",mylink: "../hrm", },
  { id: 2, name: 'Employee Relation',des: "powerful employees relationship, add your details save your work. aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat",img:"https://blog.vantagecircle.com/content/images/2019/08/employee-relations.png", mylink: "../hrm" },
  { id: 3, name: 'Meeting Facilitation',des: "we arrange meetings for queries and related consultancy course then let us know your questions that we should help you. Lorem ipsum dolor sit amet.",img:"https://www.pm-partners.com.au/wp-content/uploads/2022/05/blog-ba-facilitating-hybrid.jpeg", mylink: "../hrm" },
];

const HR = "Human Resource";
const management = "Management"
const hrmdes = " Human resource management is organizing, coordinating, and managing employees within an organization to carry out an organization's mission, vision, and goals. This includes recruiting, hiring, training, compensating, retaining";
const image= "relative bg-[url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat";
const Hrm = () => {
  return (
    <>
      <Slider image={image} title={HR} red={management} tdes={hrmdes}/>
      <Services items={items} />
    </>
  )
}

export default Hrm