import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";

function ResturentPage() {
  const { resId } = useParams();
  const [resturentMenu, setRestorentMenu] = useState(null);
  const getMenu = async (menuId) => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?menuId=${menuId}`
    );
    const json = await data.json();
    console.log(json.data);
    setRestorentMenu(json.data);
    return json;
  };

  useEffect(() => {
    getMenu(resId);
  }, [resId]);

  return (
    <div>
      <div>Resturent ID: {resId}</div>
      {resturentMenu ? (
        <div>
          <div className="flex gap-3">
            <img
              className="rounded w-1/6"
              src={IMG_CDN_URL + resturentMenu.cloudinaryImageId}
              alt={resturentMenu.name}
            />
            <div>
              <h1 className="text-4xl">{resturentMenu.name}</h1>
              <br />
              <span>{resturentMenu.costForTwoMsg}</span>
            </div>
          </div>
          <ul className="">
            {Object.values(resturentMenu.menu.items).map((menu, index) => (
              <li key={index}>
                <span>
                  {menu.price}: {menu.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1 className="text-4xl">-----------------</h1>
      )}
    </div>
  );
}

export default ResturentPage;
