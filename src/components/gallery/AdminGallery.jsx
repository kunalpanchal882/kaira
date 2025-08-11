import "../gallery/AdminGallery.css"

const AdminGallery = () => {

const AdminGallerydata = {
  "gallery": {
    "carousel": [
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/summer_banner_hp_m5ijpd.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/carasoualIMg2_skuzhs.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/carasousalImg3_w120n2.webp"
    ],
    "diamond": [
      "https://res.cloudinary.com/stackashu/image/upload/v1753431875/d0_mpunsf.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431871/d1_klikg5.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431872/d5_oyr1qd.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431871/d2_dbqvfx.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431871/d1_klikg5.jpg"
    ],
    "gold": [
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/g5_lhjqao.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431874/g3_r1yu0v.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431871/img1_ssrxfw.jpg",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431873/g1_g91fmh.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431873/g2_ar9tap.webp"
    ],
    "silver": [
      "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s1_wkokbr.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s2_wyi1e7.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s3_p9fvbl.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s2_wyi1e7.webp",
      "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s3_p9fvbl.webp"
    ]
  }
}

const Carousel = AdminGallerydata.gallery.carousel.map((image,index) => (
    <div className="Img" key={index}>
        <img src={image} />
        <div className="selectImg">
            <label className="custom-file-upload">
            <input type="file" />
            Select Image
        </label>
        </div>
    </div>
))

const Diamond = AdminGallerydata.gallery.diamond.map((diamandImg,index) => (
    <div className="Img" key={index}>
        <img src={diamandImg} />
        <div className="selectImg">
            <label className="custom-file-upload">
            <input type="file" />
            Select Image
        </label>
        </div>
    </div>
))

const gold = AdminGallerydata.gallery.gold.map((goldImg,index) => (
    <div className="Img" key={index}>
        <img src={goldImg} />
        <div className="selectImg">
            <label className="custom-file-upload">
            <input type="file" />
            Select Image
        </label>
        </div>
    </div>
))

const silver = AdminGallerydata.gallery.silver.map((silverImg,index) => (
    <div className="Img" key={index}>
        <img src={silverImg} />
        <div className="selectImg">
            <label className="custom-file-upload">
            <input type="file" />
            Select Image
        </label>
        </div>
    </div>
))


  return (
    <div className="gallery">
        <h3 className="heading">Carousel</h3>
        <div className="carousel">
            {Carousel}
        </div>
        <h3 className="heading">Diamond</h3>
        <div className="diamand">
            {Diamond}
        </div>
        <h3 className="heading">Gold</h3>
        <div className="diamand">
            {gold}
        </div>
        <h3 className="heading">Silver</h3>
        <div className="diamand">
            {silver}
        </div>
    </div>
  )
}

export default AdminGallery