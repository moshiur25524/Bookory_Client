import React, { useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const blogs = [
    {
      id: 1,
      title: "What are some classic novels everyone should read?",
      content:
        "Some classic novels that everyone should read include 'Pride and Prejudice' by Jane Austen, 'To Kill a Mockingbird' by Harper Lee, '1984' by George Orwell, and 'The Great Gatsby' by F. Scott Fitzgerald.",
    },
    {
      id: 2,
      title: "What are some popular book genres?",
      content:
        "Popular book genres include mystery, romance, science fiction, fantasy, thriller, historical fiction, and self-help.",
    },
    {
      id: 3,
      title: "Can you recommend any must-read non-fiction books?",
      content:
        "Some must-read non-fiction books include 'Sapiens: A Brief History of Humankind' by Yuval Noah Harari, 'Becoming' by Michelle Obama, 'The Power of Habit' by Charles Duhigg, and 'Educated' by Tara Westover",
    },
    {
      id: 4,
      title: "What are some tips for finding time to read more books?",
      content:
        "To find more time for reading, you can try setting aside a specific time each day dedicated to reading, carrying a book with you wherever you go, reducing screen time, joining a book club for accountability, and choosing books that genuinely interest you.",
    },
  ];
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
      />

      <div className="h-screen bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
        <div className="w-6/12 mx-auto rounded border">
          <div className="bg-white p-10 shadow-sm">
            <h3 className="text-lg font-medium text-gray-800">
              Discover the World of Books
            </h3>
            <p className="mt-4 text-gray-600">
              Exploring literature, genres, and must-reads
            </p>

            <div className="h-1 w-full mx-auto border-b my-5"></div>

            <div>
              {blogs.map((blog, index) => (
                <div key={index} className="border-b">
                  <button
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                    onClick={() => handleClick(index)}
                  >
                    <h2 className="font-bold text-lg">{blog.title}</h2>
                    <svg
                      className={`h-5 w-5 transition-transform ${
                        index === activeIndex ? "transform rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {index === activeIndex && (
                    <div className="p-4">{blog.content}</div>
                  )}
                </div>
              ))}
            </div>

            {/* <div className="transition hover:bg-indigo-50">
              <div className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                <i className="fas fa-plus"></i>
                <h3>What is term?</h3>
              </div>

              <div className="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                <p className="leading-6 font-light pl-9 text-justify">
                  Our asked sex point her she seems. New plenty she horses
                  parish design you. Stuff sight equal of my woody. Him children
                  bringing goodness suitable she entirely put far daughter.
                </p>
                <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                  Learn more
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
