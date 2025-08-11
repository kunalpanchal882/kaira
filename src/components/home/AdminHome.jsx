import { useEffect } from "react";
import "../home/AdminHome.css";

const Home = () => {
  const data = {
    about: {
      numberData: [
        { num: 500, name: "Branches" },
        { num: 1200, name: "Employees" },
      ],
      LargeText:
        "At KS Kaira Jewellers Pvt. Ltd., jewellery is not only an adornment but an expression of identity, elegance, and cultural legacy. Based in Palam Vihar, Gurgaon, we have earned a trusted name in the jewellery industry through our unwavering commitment to quality, craftsmanship, and customer satisfaction. Our journey began with a vision to seamlessly blend traditional artistry with modern aesthetics, crafting timeless pieces that speak to both heritage and individuality.",
    },
    categories: [
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431876/silver_ring_cqcddm.jpg",
        name: "Diamond",
      },
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431875/pendants-cat_eidhtw.webp",
        name: "Gold",
      },
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431875/goldring_kzpdvq.webp",
        name: "Silver",
      },
    ],
    video: "https://www.example.com/video.mp4",
    banner: [
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/carasoualIMg2_skuzhs.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/img9_eoenga.png",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431872/img2_jaqcnn.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431872/img3_fkx3k1.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431873/img7_ssdyft.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431873/img6_quscim.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431872/img5_u3xu89.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431872/img4_zgpqee.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/g4_unsoal.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/g4_unsoal.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/g4_unsoal.webp",
    ],
    testimonial: [
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431873/img6_quscim.jpg",
        name: "Aarav M.",
        text: "Amazing quality and service! Truly a premium experience.",
      },
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431873/img6_quscim.jpg",
        name: "Meera T.",
        text: "Beautiful collection. The gold designs are top-notch!",
      },
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431873/img6_quscim.jpg",
        name: "Riya P.",
        text: "Loved the variety. Diamond jewelry was stunning!",
      },
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431873/img6_quscim.jpg",
        name: "Kabir S.",
        text: "Loved the variety. Diamond jewelry was stunning!",
      },
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431873/img6_quscim.jpg",
        name: "Ishita R.",
        text: "Loved the variety. Diamond jewelry was stunning!",
      },
      {
        img: "https://res.cloudinary.com/stackashu/image/upload/v1753431873/img6_quscim.jpg",
        name: "Devansh L.",
        text: "Loved the variety. Diamond jewelry was stunning!",
      },
    ],
    quote:
      "Jewellery is a story you wear, a memory you treasure, and a promise you keep.",
  };


  useEffect(() => {

  })

  const render = data.categories.map((Categories, index) => (
    <div className="categori" key={index}>
      <div className="orignal_categori">
        <img src={Categories.img} alt={Categories.name} />
        <p>{Categories.name}</p>
      </div>
      <div className="edited_categori">
        <h3>Edit here</h3>
        <input type="text" />
        <label className="custom-file-upload">
          <input type="file" />
          Select Image
        </label>
      </div>
    </div>
  ));

  const banner = data.banner.map((image, index) => (
    <div className="banner" key={index}>
      <img src={image} alt={`Banner ${index + 1}`} />
      <label className="custom-file-upload">
        <input type="file" />
        Select Image
      </label>
    </div>
  ));

  return (
    <div>
      <div className="landingPage">
          <div className="quote">
            <label>Quote</label>
          <p>{data.quote}</p>
          <input placeholder="edit Quote" type="text" />
          <button>update</button>
          </div>
          <div className="about">
            <label>About</label>
          <p>{data.about.LargeText}</p>
            <textarea placeholder="Edit About"></textarea>
            <button>update</button>
          <span className="number">
            {data.about.numberData.map((number, index) => (
              <div key={index}>
                <p>{number.num}</p>
                <input type="text" name="" id="" />
                <h3>{number.name}</h3>
              </div>
            ))}
          </span>
          </div>
          <label>Banner</label>
          <div className="main_banner">{banner}</div>
        <h1>Categories</h1>
        <div className="main_categories">{render}</div>
      </div>
    </div>
  );
};

export default Home;
