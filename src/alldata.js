import foto1 from "./assets/images/testimonial/foto1.png";
import foto2 from "./assets/images/testimonial/foto2.png";
import foto3 from "./assets/images/testimonial/foto3.png";
import foto4 from "./assets/images/testimonial/foto4.png";

import product1 from "./assets/images/breakfast.jpg";
import product2 from "./assets/images/burgers.jpg";
import product3 from "./assets/images/camera.jpg";
import product4 from "./assets/images/hats.jpg";

import profile1 from "./assets/images/breakfast.jpg";
import profile2 from "./assets/images/burgers.jpg";
import profile3 from "./assets/images/camera.jpg";
import profile4 from "./assets/images/hats.jpg";
import profile5 from "./assets/images/morning.jpg";
import profile6 from "./assets/images/vegetables.jpg";

export const profileBannerData = [
  {
    img: profile1,
    big: false
  },
  {
    img: profile2,
    big: false
  },
  {
    img: profile3,
    big: true
  },
  {
    img: profile4,
    big: false
  },
  {
    img: profile5,
    big: false
  },
  {
    img: profile6,
    big: true
  }
];

export const productBannerData = [
  {
    id: 1,
    img: product1,
    left: true,
    title: "Virtual Office",
    text:
      "The nature of work is changing. Recruitment, retention, innovation, and productivity now require not just coffee, but also yoga, not just printers, but also art installations. WeWork offers companies of all sizes the opportunity to reimagine employees’ days through refreshing design, engaging community, and benefits for all.",
    link: {
      label: "Read More",
      to: "/virtual-office"
    }
  },
  {
    id: 2,
    img: product2,
    left: false,
    title: "Coworking",
    text:
      "The nature of work is changing. Recruitment, retention, innovation, and productivity now require not just coffee, but also yoga, not just printers, but also art installations. WeWork offers companies of all sizes the opportunity to reimagine employees’ days through refreshing design, engaging community, and benefits for all.",
    link: {
      label: "Read More",
      to: "/coworking"
    }
  }
];

export const productListData = [
  {
    id: 1,
    photo: product1,
    category: "workstation",
    name: "Workstation",
    currency: "Rp. ",
    price: 1000000,
    unit: "bulan",
    location: "Epicentrum Center",
    description:
      "Choose a flexible hot desk in an open space or a permanent dedicated desk in a shared office. You'll get access to premium amenities with a guaranteed spot to plug in and get to work."
  },
  {
    id: 2,
    photo: product2,
    category: "workstation",
    name: "Workstation",
    currency: "Rp. ",
    price: 1000000,
    unit: "bulan",
    location: "Epicentrum Center",
    description:
      "An upgraded private office with access to premium shared spaces and amenities. Includes your own meeting rooms, lounges, and executive offices dedicated to your team."
  },
  {
    id: 3,
    photo: product3,
    category: "workstation",
    name: "Workstation",
    currency: "Rp. ",
    price: 1000000,
    unit: "bulan",
    location: "Epicentrum Center",
    description:
      "A standalone, private office in a location dedicated to your team (no shared spaces). Includes just the essentials with preconfigured layouts, and basic amenities."
  },
  {
    id: 4,
    photo: product4,
    category: "workstation",
    name: "Workstation",
    currency: "Rp. ",
    price: 1000000,
    unit: "bulan",
    location: "Epicentrum Center",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
];

export const testimonialData = [
  {
    id: 1,
    img: foto1,
    name: "Ramon Ray",
    title: "Entrepreneur & Global Speaker",
    text:
      "My favorite thing about WeWork is the easy access to facilities and network of peers (online and at each location) who I can help or get help from!"
  },
  {
    id: 2,
    img: foto2,
    name: "Saeed Jabbar",
    title: "Founder of Inclusion",
    text:
      "I've scaled my organization, hosted successful events, and most importantly met lifelong friends all within the WeWork ecosystem."
  },
  {
    id: 3,
    img: foto3,
    name: "Fabricio González Antuña",
    title: "CEO of Dynamia",
    text:
      "The most important thing is that all of the community has embedded a standard of trust. You breathe trust, and for developing business, it's a great plus!"
  },
  {
    id: 4,
    img: foto4,
    name: "Entrepreneur & Creative Director",
    title: "Founder of Inclusion",
    text:
      "There's something empowering about working in a space where you are encouraged to create brilliant ideas that disrupt culture followed by the support of a team of people who want you to win."
  }
];
