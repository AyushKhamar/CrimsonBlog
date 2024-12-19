import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ src, className, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_BASEURL}
      path={src}
      className={className}
      alt=""
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      transformation={[{ width: w, height: h }]}
    />
  );
};

export default Image;
