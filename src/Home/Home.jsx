import { useState } from "react";
import Chatbot from "../Chatbot/Chatbot";
import "./Home.css"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsMore(false);
  };

  const [isMore, setIsMore] = useState(false);
  const moreAcc = () => {
    // console.log("More");
    setIsMore(true);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="text-5xl font-semibold text-white pt-80 ps-20 pb-40">
        <span className="text-6xl font-semibold text-white">SciAstra</span>
        <br />
        For the love of science
        <div></div>
      </div>
      <div onClick={() => openModal()} className="">
        <Chatbot></Chatbot>
      </div>
      <div className="">
        {isOpen ? (
          <div className="responsive lg:fixed lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white rounded-lg p-8 shadow-lg">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-3"  />
              <div className="collapse-title text-xl font-medium">
                What is SciAstra?
              </div>
              <div className="collapse-content">
                <p className="text-justify">
                  {" "}
                  SciAstra is a community of science scholars in India that
                  prepares students for various entrance exams such as IISER
                  Aptitude Test (IAT), National Entrance Screening Test (NEST),
                  ISI, CMI, and IACS.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What does SciAstra offer?
              </div>
              <div className="collapse-content">
                <p className="text-justify">
                  SciAstra offers online courses, live classes, course material,
                  tests, assignments, and doubt clarification for students who
                  want to clear research-oriented exams. They also provide full
                  scholarships worth Rs. 4 Lakhs, top international Ph.D.
                  placements, and have a proven record of excellence in the
                  market.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Where is SciAstra located?
              </div>
              <div className="collapse-content">
                <p className="text-justify">
                  SciAstra’s headquarters are located at Plot-964 Saikrupa
                  Patharagadia Chandaka, Bhubaneshwar, Odisha, 754005, India 4.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What are some of the exams that SciAstra prepares students for?
              </div>
              <div className="collapse-content">
                <p className="text-justify">
                  SciAstra prepares students for various entrance exams such as
                  IISER Aptitude Test (IAT), National Entrance Screening Test
                  (NEST), ISI, CMI, and IACS.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-1">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What is the best way to study for these exams?
              </div>
              <div className="collapse-content">
                <p className="text-justify">
                  SciAstra provides online courses, live classes, course
                  material, tests, assignments, and doubt clarification for
                  students who want to clear research-oriented exams 23. They
                  also offer a guaranteed strategy to get IISC, IISER & NISER.
                </p>
              </div>
            </div>

            <div className="flex justify-around">
              <button onClick={() => moreAcc()}>More</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        ) :
          isMore ? (
            <div className="responsive lg:fixed lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white rounded-lg p-8 shadow-lg">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-3"  />
                <div className="collapse-title text-xl font-medium">
                  What is the eligibility criteria for SciAstra’s scholarship?
                </div>
                <div className="collapse-content">
                  <p className="text-justify">
                    {" "}
                    The eligibility criteria for SciAstra’s scholarship is based
                    on the student’s performance in the scholarship test.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 my-1">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  What is the duration of SciAstra’s online courses?
                </div>
                <div className="collapse-content">
                  <p className="text-justify">
                    {" "}
                    The duration of SciAstra’s online courses varies from course
                    to course. You can find the duration of each course on their
                    website.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 my-1">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  What is the fee structure for SciAstra’s courses?
                </div>
                <div className="collapse-content">
                  <p className="text-justify">
                    {" "}
                    The fee structure for SciAstra’s courses varies from course
                    to course. You can find the fee structure of each course on
                    their website.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 my-1">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  What is the success rate of SciAstra’s students?
                </div>
                <div className="collapse-content">
                  <p className="text-justify">
                    {" "}
                    SciAstra has a proven record of excellence in the market and
                    has helped many students clear research-oriented exams.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 my-1">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  What is the contact information for SciAstra?
                </div>
                <div className="collapse-content">
                  <p className="text-justify">
                    {" "}
                    You can contact SciAstra by emailing them at
                    info@sciastra.com or by calling them at +91 7978 444 555 2.
                  </p>
                </div>
              </div>

              <div className="flex justify-around">
                <button onClick={() => openModal()}>Previous</button>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>

        ) :null }
      </div>
    </div>
  );
};

export default Home;
