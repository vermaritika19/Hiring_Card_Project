import React from "react";
import Card from "./components/Card";
// import {Bookmark}  from 'lucide-react'

const App = () => {
  const jobOpenings = [
    {
      logo: "https://www.keyweo.com/wp-content/uploads/2021/09/Diseno-sin-titulo-9.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYMgmPlxU4Yc6_TJI2BvIPYJlSYzNsG3Pfw&s",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Remote",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMQlTFIqSvr519IoFmi1feJwNZ2C4muAp6Q&s",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhjGtDVpCbI43esVmATVPezbYYFOwkYw5zw&s",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Remote",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s",
      companyName: "Microsoft",
      datePosted: "5 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Pune, India",
    },
    {
      logo: "https://thumbs.dreamstime.com/b/isolated-linkedin-logo-vector-illustration-icon-minsk-belarus-march-142909970.jpg",
      companyName: "LinkedIn",
      datePosted: "10 weeks ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Bangalore, India",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtNIzRpzgCP-LG0xpfuDwA_alyeCv4mUPuw&s",
      companyName: "IBM",
      datePosted: "1 month ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://miro.medium.com/v2/resize:fit:1204/0*gBuyyb7q0Coqpm6A",
      companyName: "Oracle",
      datePosted: "4 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$62/hr",
      location: "Noida, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        // Mapping through jobOpenings array
        return (
          <div key={idx}>
            {" "}
            {/* Unique key for each Card */}
            <Card
              brandLogo={elem.logo}
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
      -
    </div>
  );
};

export default App;
