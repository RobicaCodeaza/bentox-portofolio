import { ArrowDown2 } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";

interface DropdownProps {
  options: string[];
}

const TopBarDropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-btn" onClick={toggleDropdown}>
        <span> Show {selectedOption || "10"}</span>{" "}
        <span>
          <ArrowDown2
            className={`dropdown-arrow-button ${
              isOpen
                ? "dropdown-arrow-button-rotate-down"
                : "dropdown-arrow-button-rotate-up"
            }`}
          />{" "}
          entries
        </span>
      </button>

      <div
        className={`dropdown-content ${isOpen ? "active" : ""}`}
        ref={dropdownRef}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="dropdown-option"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBarDropdown;
