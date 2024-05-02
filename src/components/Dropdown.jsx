import React, { useState } from 'react';

export const Roles = ({filters,setFilters}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const roles = ["Frontend", "Ios", "Android" , "Fullstack" , "Backend" ,"Tech lead", "Devops" , "Data Science" , "Machine Learning" , "Product Manager" , "UI/UX Designer" , "QA" , "HR" , "Sales" , "Marketing" , "Content Writer" , "Business Analyst" , "Finance" , "Operations" , "Legal" , "Others"]

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    if (checked) {
      setCheckedItems([...checkedItems, value]);
      setFilters({
        ...filters,
        role: [...checkedItems, value]
      })
    } else {
      setCheckedItems(checkedItems.filter(item => item !== value));
        setFilters({
            ...filters,
            role: checkedItems.filter(item => item !== value)
        })
    }
  };

  return (
    <div className="relative">
      <button
        id="dropdownBgHoverButton"
        data-dropdown-toggle="dropdownBgHover"
        className="text-white bg-slate-400 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
        Roles
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <div id="dropdownBgHover" className="z-10 absolute w-48 h-[300px] overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700">
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
            {roles.map((role) => (
                <li key={role}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id={`checkbox-item-${role}`}
                    type="checkbox"
                    value={role.toLowerCase()}
                    checked={checkedItems.includes(role.toLowerCase())}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={`checkbox-item-${role}`}
                    className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                  >
                    {role}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Experiences = ({filters,setFilters}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const experiences = [1,2,3,4,5,6,7,8,9]
  
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        console.log(value, checked);
        const experienceValue = parseInt(value, 10);
        if (checked) {
          setCheckedItems( [experienceValue]);
          setFilters((prevFilters) => ({
            ...prevFilters,
            minExperience: [experienceValue]
          }));
        } else {
          setCheckedItems(checkedItems => checkedItems.filter(item => item !== experienceValue));
          setFilters((prevFilters) => ({
            ...prevFilters,
            minExperience: checkedItems.filter(item => item !== experienceValue)
          }));
        }
      };
  
    return (
      <div className="relative">
        <button
          id="dropdownBgHoverButton"
          data-dropdown-toggle="dropdownBgHover"
          className="text-white bg-slate-400 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={toggleDropdown}
        >
          Experience
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div id="dropdownBgHover" className="z-10 absolute w-48 h-[300px] overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700">
            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
              {experiences.map((experience) => (
                  <li key={experience}>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={`checkbox-item-${experience}`}
                      type="checkbox"
                      value={experience}
                      checked={checkedItems.includes(experience)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={`checkbox-item-${experience}`}
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {experience}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

export const Location = ({filters,setFilters}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const location = ["Remote","In-office"]
  
    const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
      console.log(value, checked);
      if (checked) {
        setCheckedItems([value]);
        setFilters({
          ...filters,
          location: [value]
        })
      } else {
        setCheckedItems(checkedItems.filter(item => item !== value));
          setFilters({
              ...filters,
              location: checkedItems.filter(item => item !== value)
          })
      }
    };
  
    return (
      <div className="relative">
        <button
          id="dropdownBgHoverButton"
          data-dropdown-toggle="dropdownBgHover"
          className="text-white bg-slate-400 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={toggleDropdown}
        >
          Remote
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div id="dropdownBgHover" className="z-10 absolute w-48 h-[300px] overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700">
            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
              {location.map((role) => (
                  <li key={role}>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={`checkbox-item-${role}`}
                      type="checkbox"
                      value={role.toLowerCase()}
                      checked={checkedItems.includes(role.toLowerCase())}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={`checkbox-item-${role}`}
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {role}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

export const MinBasePay = ({filters,setFilters}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const payRange = [10,20,30,40,50]
  
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        console.log(value, checked);
        const payValue = parseInt(value, 10);
        if (checked) {
          setCheckedItems( [payValue]);
          setFilters((prevFilters) => ({
            ...prevFilters,
            minBasePay: [payValue]
          }));
        } else {
          setCheckedItems(checkedItems => checkedItems.filter(item => item !== payValue));
          setFilters((prevFilters) => ({
            ...prevFilters,
            minBasePay: checkedItems.filter(item => item !== payValue)
          }));
        }
      };
  
    return (
      <div className="relative">
        <button
          id="dropdownBgHoverButton"
          data-dropdown-toggle="dropdownBgHover"
          className="text-white bg-slate-400 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
          onClick={toggleDropdown}
        >
          Min base Pay
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div id="dropdownBgHover" className="z-10 absolute w-48 h-[300px] overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700">
            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
              {payRange.map((pay) => (
                  <li key={pay}>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={`checkbox-item-${pay}`}
                      type="checkbox"
                      value={pay}
                      checked={checkedItems.includes(pay)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={`checkbox-item-${pay}`}
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {pay} LPA
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };