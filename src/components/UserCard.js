import getData from "@/firebase/firestore/getData";
import React, { useEffect, useState } from "react";
import Avatar from "./avatar";

function UserCard({
  avatarStyle = "rounded-full mr-3 h-[40px] w-[40px]",
  data,
  textSize = "cusText-md",
}) {
  const [username, setUsername] = useState();
  const [occu, setOccu] = useState();
  useEffect(() => {
    if (data) {
      getData("Users", data.writerId).then(({ result }) => {
        setUsername(result.name);
        setOccu(result.occu);
      });
    }
  }, [data]);

  return (
    <div className="flex flex-row items-center justify-start mb-4">
      <Avatar name={username} className={avatarStyle} />
      <div className="flex flex-col">
        <p className={`text-gray-800 ${textSize} leading-4 font-semibold`}>
          {username}
        </p>
        <p
          className={`text-gray-500  ${textSize} leading-4 font-normal lg:block hidden`}
        >
          {occu}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
