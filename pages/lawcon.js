import React from 'react'
import Slider from './components/Slider';
import Services from './components/Services';

const lawcon = () => {
    const items = [
        {
          id: 1,
          name: "Our Team",
          des: "Our Team Provide you the best services about your related queries.Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpa",
          img: "https://res.cloudinary.com/dwybftdoj/image/upload/v1682772415/lawapp/cgrzgb7wa4vaq7s0fnih.png",
          mylink: "../hrm",
          tag: "Experienced Team"
        },
        {
          id: 2,
          name: "Legal Formalitites",
          des: "powerful employees relationship, add your details save your work. aliquam ac volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat.",
          img: "https://res.cloudinary.com/dwybftdoj/image/upload/v1682772415/lawapp/zf4k89ofz1j0ylbcx0aw.png",
          mylink: "../hrm",
          tag: "Trusted Source"
        },
        {
          id: 3,
          name: "Your Questions",
          des: "we arrange meetings for queries and related consultancy course then let us know your questions that we should help you. Lorem ipsum dolor sit amet.",
          img: "https://res.cloudinary.com/dwybftdoj/image/upload/v1682772415/lawapp/cg7nmqhttt2lyseccmcu.png",
          mylink: "../hrm",
          tag: "Answers to FAQ"
        },
      ];

    const law = "LAW";
const lawcon = "CONSULTANCY"
const ldes = "lawyer, one trained and licensed to prepare, manage, and either prosecute or defend a court action as an agent for another and who also gives advice on legal matters that may or may not require court action. Lawyers apply the law to specific cases. They investigate the facts and the evidence by conferring with their clients and reviewing documents, and they prepare and file the pleadings in court.";
const image= "relative bg-[url(https://res.cloudinary.com/dwybftdoj/image/upload/v1682772642/ouadixtfe6oqilcnv7ms.png)] bg-cover bg-center bg-no-repeat";
  return (
    <>
    <Slider image={image} title={law} red={lawcon} tdes={ldes} />
    <Services items={items}/>
    </>
  )
}

export default lawcon