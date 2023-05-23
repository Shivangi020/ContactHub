import React from "react";

interface Props {
  activeScreen: string;
  setActiveScreen: React.Dispatch<React.SetStateAction<string>>;
}

const EditContact: React.FC<Props> = ({ activeScreen, setActiveScreen }) => {
  return (
    <div
      className={`${
        activeScreen === "EditContact"
          ? "flex flex-col justify-center h-full"
          : "flex flex-col justify-center h-full hidden"
      }`}
    >
      <div className="add-btn flex flex-col justify-center item-center">
        <button>Edit Contact</button>
      </div>
      <div className="contact-list"></div>
    </div>
  );
};

export default EditContact;
