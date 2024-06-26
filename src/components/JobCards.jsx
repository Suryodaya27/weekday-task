import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Modal from "./Modal";
import { Roles , Experiences , Location , MinBasePay } from "./Dropdown";

const fetchData = async (filters, offset) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    limit: 28,
    offset: offset,
    filters: filters,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function JobCards() {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState({
    minExperience: [],
    companyName: "",
    location: [],
    techStack: [],
    role: [],
    minBasePay: [],
  });

  useEffect(() => {
    fetchData(0).then((data) => {
      setItems(data.jdList);
    });
  }, []);

  useEffect(() => {
    console.log("Filters changed:", filters);
    const filtered = items.filter(item => {
      // Apply filter conditions here based on filter state
      return (
        (filters.role.length === 0 || filters.role.includes(item.jobRole)) &&
        (filters.minExperience.length === 0 || (filters.minExperience[0]>=item.minExp && filters.minExperience[0]<=item.maxExp)) &&
        (filters.location.length === 0 || (filters.location[0] === "remote" ? filters.location[0]===(item.location) : filters.location[0] != "remote")) &&
        (filters.minBasePay.length === 0 || (filters.minBasePay[0]>=item.minBasePay && filters.minBasePay[0]<=item.maxBasePay) )
      );
    });

    setFilteredItems(filtered);
  }, [items, filters]);

  const fetchMoreData = () => {
    fetchData(offset + 28).then((data) => {
      setItems([...items, ...data.jdList]);
      setOffset(offset + 28);
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <h2 className="flex align-middle justify-center underline mt-5 text-2xl">
        Search Jobs
      </h2>
      <div className="my-5 flex align-middle flex-wrap justify-center gap-5 mx-32">
        
        <Roles filters={filters}  setFilters={setFilters}/>
        <Experiences filters={filters}  setFilters={setFilters}/>
        <Location filters={filters}  setFilters={setFilters}/>
        <MinBasePay filters={filters}  setFilters={setFilters}/>
        {/*<TechStack/>
        <CompanyName/> */}

      </div>
      <div className="flex justify-center">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<Loading />}
        >
          <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">


            {filteredItems.map((item, index) => (
              <div
                className="m-5 w-[300px] rounded-lg border  shadow-md hover:scale-105 transition-all duration-100"
                key={index}
              >
                <div className="p-4">
                  <h1 className=" font-semibold hover:underline hover:underline-offset-2 text-xl">
                    <a href={item.jdLink}>
                      {item.jobRole.charAt(0).toUpperCase() +
                        item.jobRole.slice(1)}
                    </a>
                  </h1>
                  <p className="mt-3  text-gray-600 text-lg">
                    {item.companyName || "Company Name"}
                  </p>
                  <p className="mt-1  text-gray-600 font-semibold text-lg">
                    {item.location.charAt(0).toUpperCase() +
                      item.location.slice(1)}
                  </p>
                  <p className="mt-1  text-gray-600 text-lg">
                    <span className=" text-black">Experience</span> :{" "}
                    {item.minExp || "Not Mentioned"} {item.minExp && "-"}{" "}
                    {item.maxExp} {item.minExp && "years"}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    <span className=" text-black text-lg">About Company :</span>
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.jobDetailsFromCompany.length > 200
                      ? `${item.jobDetailsFromCompany.slice(0, 200)}...`
                      : item.jobDetailsFromCompany}
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={openModal}
                      className="mt-4 rounded-sm text-slate-500 underline underline-offset-1"
                    
                    >
                      Show More
                    </button>

                    {isModalOpen && (
                      <Modal
                        id="hs-vertically-centered-scrollable-modal"
                        title="Company Name"
                        content={
                          <div className="p-4 overflow-y-auto">
                            <div className="space-y-4">
                              {item.jobDetailsFromCompany}
                            </div>
                          </div>
                        }
                        onClose={closeModal}
                      />
                    )}
                  </div>

                  <div className="mt-3">
                    <button
                      type="button"
                      className=" p-3 w-full bg-slate-400 rounded-md text-white font-semibold shadow-md hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Easy Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default JobCards;
