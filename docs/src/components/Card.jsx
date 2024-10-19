import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { LuShieldClose } from "react-icons/lu";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={1.5}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-700/50 text-white px-5 py-10 overflow-hidden "
      >
        <FaFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full  left-0">
          <div className="flex items-center justify-between px-8 py-3 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <LuShieldClose />
              ) : (
                <IoDownloadOutline size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4  ${
                data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font font-semibold">
                {data.tag.tagtitle}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
