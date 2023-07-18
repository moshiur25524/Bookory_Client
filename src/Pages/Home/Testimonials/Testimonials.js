import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const persons = [
    {
      id: 1,
      name: "John Doe",
      rating: 4,
      profession: "Web Developer",
      img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg",
      description:
        "John Doe is a skilled web developer with expertise in HTML, CSS, and JavaScript. He has extensive experience in building responsive and user-friendly websites. John is passionate about creating efficient and maintainable code to deliver exceptional web experiences.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      profession: "UI/UX Designer",
      img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",
      description:
        "Jane Smith is a talented UI/UX designer specializing in creating intuitive and visually appealing user interfaces. She has a keen eye for detail and a deep understanding of user-centered design principles. Jane collaborates closely with development teams to ensure seamless integration of design and functionality.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 4,
      profession: "Frontend Developer",
      img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg",
      description:
        "Mike Johnson is a frontend developer skilled in modern JavaScript frameworks such as React and Vue.js. He excels in crafting interactive and dynamic user interfaces. With a passion for optimizing performance and accessibility, Mike strives to deliver top-notch frontend experiences.",
    },
    {
      id: 4,
      name: "Emily Wilson",
      rating: 3,
      profession: "Backend Developer",
      img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg",
      description:
        "Emily Wilson is an experienced backend developer proficient in server-side technologies such as Node.js and Python. She specializes in designing and implementing efficient APIs and database structures. Emily ensures robust and scalable backend systems to support web applications with high reliability.",
    },
    {
      id: 5,
      name: "David Brown",
      rating: 5,
      profession: "Full Stack Developer",
      img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg",
      description:
        "David Brown is a versatile full stack developer with expertise in both frontend and backend technologies. He is proficient in building end-to-end web applications using a wide range of tools and frameworks. David enjoys the challenge of solving complex problems and delivering comprehensive web solutions.",
    },
    {
      id: 6,
      name: "Sarah Adams",
      profession: "Frontend Developer",
      rating: 4,
      img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg",
      description:
        "Sarah Adams is a frontend developer specializing in creating interactive and responsive web interfaces. She has a strong command of HTML, CSS, and JavaScript frameworks like Angular and React. With a keen eye for design and a focus on user experience, Sarah brings creativity and technical expertise to every project.",
    },
    {
      id: 7,
      name: "Michael Roberts",
      profession: "Full Stack Developer",
      rating: 3,
      img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg",
      description:
        "Michael Roberts is a skilled full stack developer with expertise in both frontend and backend technologies. He is proficient in languages like JavaScript, Python, and PHP, as well as frameworks like React, Express, and Django. Michael enjoys tackling complex problems and delivering robust and scalable web applications.",
    },
    {
      id: 8,
      name: "Alexis Campbell",
      profession: "UI/UX Designer",
      rating: 5,
      img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",
      description:
        "Alexis Campbell is a passionate UI/UX designer who excels at creating visually stunning and user-friendly interfaces. She is well-versed in design tools like Sketch and Figma, and her expertise extends to prototyping and user research. Alexis collaborates closely with development teams to ensure seamless integration of design and functionality.",
    },
  ];

  return (
    <section className="container my-24 px-6 mx-auto text-gray-700">
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
        <p className="mb-6 pb-2 text-gray-600 md:mb-12 md:pb-0">
          Insights and Inspiring Stories Shared by Seasoned Professionals and
          Passionate Enthusiasts in the World of Web Technology
        </p>
      </div>

      <Slider {...settings}>
        {persons.map((person) => (
          <div className="mb-12 p-2 md:mb-0">
            <div className="flex justify-center mb-6">
              <img
                src={person.img}
                className="rounded-full shadow-lg w-16 md:w-32 lg:w-48"
                alt="avatar"
              />
            </div>
            <h5 className="text-xl font-semibold mb-4">{person.name}</h5>
            <h6 className="font-semibold text-blue-600 mb-4">
              {person.profession}
            </h6>
            <p className="mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="quote-left"
                className="w-6 pr-2 inline-block"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              {person.description}
            </p>
            <p className="text-center">
              <Rating
                initialRating={person.rating}
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiFillStar />}
                fractions={2}
                readonly
              />
            </p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
