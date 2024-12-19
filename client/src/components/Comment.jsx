import React from "react";
import Image from "./Image.jsx";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src={"userImg.jpeg"}
          className={"w-10 h-10 rounded-full object-cover"}
          w={"40"}
        />
        <span>John doe</span>
        <span className="text-sm text-gray-500"></span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem
          odit iure totam delectus. Magni. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Repudiandae, molestias similique!
          Eligendi odit optio voluptatum quos minus corporis! Animi, quaerat.
        </p>
      </div>
    </div>
  );
};

export default Comment;
