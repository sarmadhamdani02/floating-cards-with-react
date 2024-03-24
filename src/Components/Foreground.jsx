import React, { useState } from "react";
import Cards from "./Cards";
import { useRef } from "react";

const Foreground = () => {

  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni consequatur nihil dicta tempore molestiae.",
      fileSize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "green",
      },
      
    },

    {
      desc: "This is Syed Shah Sarmad Hamdani",
      fileSize: "4gb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Meet",
        tagColor: "blue",
      },
      
    },
    {
    
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, velit exercitationem natus quaerat tempore iste qui aperiam facilis ",
      fileSize: "4.3mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Meet",
        tagColor: "blue",
      },
      
    },
  ];

  return (
    <div ref = {ref} className=" w-full h-screen overflow-hidden flex gap-6 p-5">
      {data.map((items, index) => (
        <Cards data={items} reference={ref} />
      ))}
    </div>
  );
};
export default Foreground;
