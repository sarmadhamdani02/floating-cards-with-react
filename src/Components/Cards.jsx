import React from "react";
import { MdFileDownload, MdScale } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {motion} from 'framer-motion'
import { useRef } from "react";


const Cards = ({ data , reference}) => {
  const cardRef = useRef(null);

  return (
    <motion.div ref={cardRef} drag whileDrag={{scale:1, rotate:-2, boxShadow:`0 0 5px #fff,0 0 10px #fff,0 0 15px ${data.close && ( data.tag.tagColor == "green" ? "#16a34a" : "#2563eb")}`}} dragConstraints={reference}  className=" w-48 h-60 rounded-[30px] flex  bg-white/80 text-black flex-col relative overflow-hidden p-6">
      <FaFileAlt />
      <p className=" text-sm font-thin mt-4">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full  ">
        <div className="text flex items-center justify-between p-3">
          <h5 className=" text-sm font-thin"> {data.fileSize}</h5>
          {data.close ? (
            <MdFileDownload size="0.5em" className=" rounded-full h-4 w-4" />
          ) : (
            <IoIosCloseCircleOutline
              size="0.5em"
              className=" rounded-full h-4 w-4"
            />
          )}
        </div>
        {data.tag.isOpen && (
          <div className={`color-tag w-full h-9 ${data.tag.tagColor == "green" ? "bg-green-600" : "bg-blue-600" } flex items-center justify-center text-white text-sm font-thin`}>
            <h1> {data.tag.tagTitle}</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
