import { useState, useRef } from "react";
import "../gallery/AdminGallery.css";

const AdminGallery = () => {
  const AdminGallerydata = {
    gallery: {
      carousel: [
        "https://res.cloudinary.com/stackashu/image/upload/v1753431874/summer_banner_hp_m5ijpd.jpg",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431874/carasoualIMg2_skuzhs.webp",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431874/carasousalImg3_w120n2.webp"
      ],
      diamond: [
        "https://res.cloudinary.com/stackashu/image/upload/v1753431875/d0_mpunsf.jpg",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431871/d1_klikg5.jpg",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431872/d5_oyr1qd.jpg",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431871/d2_dbqvfx.jpg",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431871/d1_klikg5.jpg"
      ],
      gold: [
        "https://res.cloudinary.com/stackashu/image/upload/v1753431874/g5_lhjqao.webp",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431874/g3_r1yu0v.webp",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431871/img1_ssrxfw.jpg",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431873/g1_g91fmh.webp",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431873/g2_ar9tap.webp"
      ],
      silver: [
        "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s1_wkokbr.webp",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s2_wyi1e7.webp",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s3_p9fvbl.webp",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s2_wyi1e7.webp",
        "https://res.cloudinary.com/stackashu/image/upload/v1753431876/s3_p9fvbl.webp"
      ]
    }
  };

  const [galleryData, setGalleryData] = useState(AdminGallerydata.gallery);
  const [capturedImages, setCapturedImages] = useState({});
  const [cameraOpen, setCameraOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Open camera
  const handleOpenCamera = async (section, index) => {
    setActiveSection(section);
    setActiveIndex(index);
    setCameraOpen(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  // Close camera
  const handleCloseCamera = () => {
    setCameraOpen(false);
    let stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  // Capture photo
  const handleCapture = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageData = canvasRef.current.toDataURL("image/png");

    setCapturedImages(prev => ({
      ...prev,
      [`${activeSection}-${activeIndex}`]: imageData
    }));

    handleCloseCamera();
  };

  // Save captured image as original
  const handleSave = (section, index) => {
    const key = `${section}-${index}`;
    const updatedSection = [...galleryData[section]];
    updatedSection[index] = capturedImages[key];

    setGalleryData(prev => ({
      ...prev,
      [section]: updatedSection
    }));

    setCapturedImages(prev => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  // Remove captured image
  const handleRemove = (section, index) => {
    const key = `${section}-${index}`;
    setCapturedImages(prev => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  // Render images
  const renderSection = (sectionName, images) => (
    <div>
      <h3 className="heading">{sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}</h3>
      <div className="diamand">
        {images.map((img, index) => {
          const key = `${sectionName}-${index}`;
          return (
            <div className="Img" key={index}>
              <img src={img} alt="" />
              <div className="selectImg">
                <label className="custom-file-upload1">
                  <input type="file" />
                  Select Image
                </label>
                <button onClick={() => handleOpenCamera(sectionName, index)}>Open Camera</button>
              </div>
              {capturedImages[key] && (
                <img src={capturedImages[key]} alt="Captured" style={{ display: "block", marginTop: "10px" }} />
              )}
                {capturedImages[key] && (
                  <div className="openCamera">
                    <button onClick={() => handleSave(sectionName, index)}>Save</button>
                    <button onClick={() => handleRemove(sectionName, index)}>Remove</button>
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="gallery">
      {renderSection("carousel", galleryData.carousel)}
      {renderSection("diamond", galleryData.diamond)}
      {renderSection("gold", galleryData.gold)}
      {renderSection("silver", galleryData.silver)}

      {cameraOpen && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            zIndex: 9999
          }}
        >
          <button
            onClick={handleCloseCamera}
            style={{
              position: "absolute", top: 20, right: 20,
              background: "red", color: "white",
              padding: "5px 10px", border: "none", cursor: "pointer"
            }}
          >
            Close
          </button>
          <video ref={videoRef} autoPlay playsInline style={{ maxWidth: "100%", maxHeight: "70%" }} />
          <canvas ref={canvasRef} width="640" height="480" style={{ display: "none" }} />
          <button
            onClick={handleCapture}
            style={{
              width: 60, height: 60, borderRadius: "50%",
              background: "white", border: "5px solid gray",
              marginTop: 20, cursor: "pointer"
            }}
          ></button>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
