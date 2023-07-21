import { useEffect, useMemo, useState } from "react";
import { minidenticon } from "minidenticons";
import getData from "@/firebase/firestore/getData";
function Avatar({ name, ...props }) {
  const [loading, setloading] = useState(false);
  const svgURI = useMemo(
    () => "data:image/svg+xml;utf8," + encodeURIComponent(minidenticon(name)),
    [name]
  );

  if (svgURI) {
    return (
      <img src={svgURI} alt={name} {...props} style={{ borderWidth: 1 }} />
    );
  } else {
    return <div {...props} style={{ backgroundColor: "gray" }} />;
  }
}

export default Avatar;
