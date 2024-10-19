import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  // const data = [IconBase, name filesize , des ,close,Download,tagdetails ];
  // useState();

  const ref = useRef(null);

  const data = [
    {
      desc: "Hello My Name is Dev Dhama and this is my MiniReactApp.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "Today i made this react app for practicing React",
      filesize: ".7mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Upload", tagcolor: "blue" },
    },
    {
      desc: "Hello My Name is Dev Dhama and this is my MiniReactApp.",
      filesize: ".7mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "I am a Btech Student i am learning fronted with React",
      filesize: ".6mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "Hello My Name is Vashu Tomar and this is my MiniReactApp.",
      filesize: ".3mb",
      close: true,
      tag: { isOpen: true, tagtitle: "Just Me", tagcolor: "blue" },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
