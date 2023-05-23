import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsTelephoneFill, BsFillMapFill } from "react-icons/bs";

type NavProp = {
  name: string;
  isActive: boolean;
  to: string;
  icon: React.ReactNode;
};
const navsData: NavProp[] = [
  { name: "Contact", isActive: true, to: "/", icon: <BsTelephoneFill /> },
  {
    name: "Charts & Map",
    isActive: false,
    to: "/charts",
    icon: <BsFillMapFill />,
  },
];
const Dashboard: React.FC = () => {
  const [nav, setNav] = useState<NavProp[]>(navsData);

  // Action for Nav links of dashboard sidebar so that whichever page is active corresponding links should have different background colour
  const activeBtnHandler = (tag: string) => {
    const navOptions = navsData.map((item) => {
      return { ...item, isActive: item.name === tag };
    });
    setNav(navOptions);
  };
 
  return (
    <main className="main-d flex">
      <div className="sidebar p-8">
        <h1 className="sm:text-3xl font-bold text-xl ">Contact Hub</h1>
        <ul className="btn-d flex flex-col mt-8">
          {nav.map((nav, index) => {
            const { name, isActive, to, icon } = nav;
            return (
              <li
                className={` ${
                  isActive
                    ? "active-btn py-2 pr-3 flex text-sm font-semibold transition-all sm:text-xl"
                    : "py-2 pl-2 flex text-sm font-semibold transition-all sm:text-xl"
                }`}
                key={index}
                onClick={() => activeBtnHandler(name)}
              >
                <Link to={to} className="w-full flex items-center h-full">
                  <span className="sm:mr-3 ">{icon}</span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="dashbd sm:p-8 overflow-y-scroll p-2 pt-8">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
