import { useState, useEffect } from "react";
import { ALL_RESTURENT_LIST, RESTURENT_MENU } from "../constant";

export const useResturentList = () => {
  const [allResturentList, setAllResturentList] = useState([]);
  const getResturents = async () => {
    const res = await fetch(ALL_RESTURENT_LIST);
    const json = await res.json();

    const resturents = json?.data?.cards?.find(
      (item) => item.cardType == "seeAllRestaurants"
    )?.data?.data?.cards;

    setAllResturentList(resturents);
  };

  useEffect(() => {
    getResturents();
  }, []);

  return allResturentList;
};

export const useResturentMenu = (resId) => {
  const [resturentMenu, setRestorentMenu] = useState(null);
  const getMenu = async (resId) => {
    const data = await fetch(`${RESTURENT_MENU}${resId}`);
    const json = await data.json();
    console.log(json.data);
    setRestorentMenu(json.data);
  };

  useEffect(() => {
    getMenu(resId);
  }, [resId]);

  return resturentMenu;
};
