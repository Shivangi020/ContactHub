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

  const activeBtnHandler = (tag: string) => {
    const navOptions = navsData.map((item) => {
      return { ...item, isActive: item.name === tag };
    });
    setNav(navOptions);
  };

  return (
    <main className="main-d flex">
      <div className="sidebar p-8">
        <h1 className="text-3xl font-bold">Contact Hub</h1>
        <ul className="btn-d flex flex-col mt-8">
          {nav.map((nav, index) => {
            const { name, isActive, to, icon } = nav;
            return (
              <li
                className={` ${
                  isActive
                    ? "active-btn py-3 pl-2 flex text-xl font-semibold transition-all"
                    : "py-3 pl-2 flex text-xl font-semibold transition-all"
                }`}
                key={index}
                onClick={() => activeBtnHandler(name)}
              >
                <Link to={to} className="w-full flex">
                  <span className="mr-3">{icon}</span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="dashbd p-8 overflow-y-scroll">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
