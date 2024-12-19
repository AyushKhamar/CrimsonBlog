import React from "react";
import Image from "./Image.jsx";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src={"postImg.jpeg"}
          className={"rounded-2xl object-cover"}
          w="735"
        />
      </div>
      {/* details  */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={"/test"} className="text-4xl font-semibold">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John doe</Link>
          <span>On</span>
          <Link className="text-blue-800">Web design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          inventore autem ex beatae reprehenderit aspernatur harum dolore
          accusantium impedit unde, nobis architecto. Omnis eveniet officiis
          aliquid unde reprehenderit sapiente quam temporibus. Corrupti et
          beatae debitis exercitationem ipsa animi maxime est.
        </p>
        <Link to={"/test"} className="hover:underline text-blue-800">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
