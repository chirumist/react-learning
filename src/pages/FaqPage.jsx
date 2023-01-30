import React, { useState } from "react";
import CollapsibleAccoardion from "../components/feature/Accoardion";
const FaqPage = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [faqList, setFaqList] = useState([
    { title: "How to find villa?", detail: "" },
    { title: "Is it good food or not?", detail: "" },
    { title: "Can i sold my food as well?", detail: "" },
    { title: "How to reach us?", detail: "" },
  ]);
  return (
    <>
      <h1 className="text-2xl">FAQ Page</h1>
      <div className="flex flex-col gap-3 my-4">
        {faqList.map((item) => {
          return (
            <CollapsibleAccoardion
              key={item.title}
              isVisible={activeMenu == item.title}
              onClick={(title) => setActiveMenu(title)}
              title={item.title}
            >
              <p>
                Deserunt consectetur qui laboris pariatur deserunt est
                consectetur veniam incididunt quis amet non quis adipisicing.
                Eiusmod cupidatat minim pariatur in qui amet ex do enim enim non
                veniam anim ex. Non id quis do dolore laborum cupidatat non
                eiusmod do id ex anim pariatur.
              </p>
            </CollapsibleAccoardion>
          );
        })}
      </div>
    </>
  );
};

export default FaqPage;
