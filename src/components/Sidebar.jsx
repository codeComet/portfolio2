import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full border border-r-border">
      <Accordion>
        {/* Details */}
        <AccordionItem className="w-full">
          {({ open }) => (
            <>
              <AccordionHeader className="w-full flex justify-between p-4 border border-x-0 border-t-0 border-b-border">
                <h3 className={`accordion-title text-white`}>personal-info</h3>

                {open ? (
                  <AiFillCaretUp className="text-white" />
                ) : (
                  <AiFillCaretDown className="text-white" />
                )}
              </AccordionHeader>

              <AccordionBody className="px-4">
                <div className="accordion-body ">
                  {/* bio */}
                  <AccordionItem className="p-3">
                    {({ open }) => (
                      <>
                        <AccordionHeader className="p-3 flex items-center">
                          <div className="mr-2">
                            {!open ? (
                              <svg
                                width="9"
                                height="14"
                                viewBox="0 0 9 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
                                  fill="#607B96"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="13"
                                height="9"
                                viewBox="0 0 13 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z"
                                  fill="#607B96"
                                />
                              </svg>
                            )}
                          </div>

                          <FaFolderOpen className="text-coral mx-2" />
                          <h3 className={`accordion-title text-white`}>bio</h3>
                        </AccordionHeader>

                        <AccordionBody className="px-3">
                          <div
                            className="accordion-body text-bodyText pl-12"
                            onClick={() =>
                              navigate({
                                pathname: "/about/bio",
                              })
                            }
                          >
                            bio.js
                          </div>
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>

                  {/* interests */}
                  <AccordionItem className="p-3">
                    {({ open }) => (
                      <>
                        <AccordionHeader className="p-3 flex items-center">
                          <div className="mr-2">
                            {!open ? (
                              <svg
                                width="9"
                                height="14"
                                viewBox="0 0 9 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
                                  fill="#607B96"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="13"
                                height="9"
                                viewBox="0 0 13 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z"
                                  fill="#607B96"
                                />
                              </svg>
                            )}
                          </div>

                          <FaFolderOpen className="text-green mx-2" />
                          <h3 className={`accordion-title text-white`}>
                            interests
                          </h3>
                        </AccordionHeader>

                        <AccordionBody className="px-3">
                          <div className="accordion-body text-bodyText">
                            Lorem ipsum dolor sit amet.
                          </div>
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>

                  {/* education */}
                  <AccordionItem className="p-3">
                    {({ open }) => (
                      <>
                        <AccordionHeader className="p-3 flex items-center">
                          <div className="mr-2">
                            {!open ? (
                              <svg
                                width="9"
                                height="14"
                                viewBox="0 0 9 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
                                  fill="#607B96"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="13"
                                height="9"
                                viewBox="0 0 13 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z"
                                  fill="#607B96"
                                />
                              </svg>
                            )}
                          </div>

                          <FaFolderOpen className="text-blue mx-2" />
                          <h3 className={`accordion-title text-white`}>
                            education
                          </h3>
                        </AccordionHeader>

                        <AccordionBody className="px-3">
                          <div className="accordion-body text-bodyText">
                            Lorem ipsum dolor sit amet.
                          </div>
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>

        {/* Contacts */}
        <AccordionItem className="w-full">
          {({ open }) => (
            <>
              <AccordionHeader className="w-full flex justify-between p-4 border border-x-0 border-t-0 border-b-border">
                <h3 className={`accordion-title text-white`}>contacts</h3>

                {open ? (
                  <AiFillCaretUp className="text-white" />
                ) : (
                  <AiFillCaretDown className="text-white" />
                )}
              </AccordionHeader>

              <AccordionBody>
                <div className="accordion-body">
                  <AccordionItem>
                    <AccordionHeader>
                      <h3 className={`accordion-title text-bodyText px-5 py-2`}>
                        Title 1
                      </h3>
                    </AccordionHeader>
                  </AccordionItem>
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;
