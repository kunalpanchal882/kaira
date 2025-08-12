import React, { useState, useRef } from 'react';
import data from './Store.json';
import './Stores.css';
import Webcam from 'react-webcam';

function Stores() {
  const [stores, setStores] = useState(data.store);
  const [editingIndex, setEditingIndex] = useState(null);

  // Camera state for editing
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = useRef(null);

  // Camera state for adding new store
  const [addCameraOpen, setAddCameraOpen] = useState(false);
  const addWebcamRef = useRef(null);

  // New store data
  const [newStore, setNewStore] = useState({
    name: '',
    address: '',
    phone: '',
    mapsrc: '',
    image: ''
  });

  // Update existing store fields
  const handleChange = (e, field, index) => {
    const updatedStores = [...stores];
    updatedStores[index][field] = e.target.value;
    setStores(updatedStores);
  };

  // Switch to edit mode
  const handleEdit = (index) => {
    setEditingIndex(index);
    setIsCameraOpen(false);
  };

  // Exit edit mode
  const handleUpdate = () => {
    setEditingIndex(null);
    setIsCameraOpen(false);
  };

  // Capture image in edit mode
  const captureImage = (index) => {
    const imageSrc = webcamRef.current.getScreenshot();
    handleChange({ target: { value: imageSrc } }, 'image', index);
    setIsCameraOpen(false);
  };

  // Capture image for new store
  const captureNewStoreImage = () => {
    const imageSrc = addWebcamRef.current.getScreenshot();
    setNewStore({ ...newStore, image: imageSrc });
    setAddCameraOpen(false);
  };

  // Add new store to list
  const handleAddStore = () => {
    if (!newStore.name || !newStore.address || !newStore.phone || !newStore.mapsrc || !newStore.image) {
      alert('Please fill all fields and add an image!');
      return;
    }
    setStores([...stores, newStore]);
    setNewStore({ name: '', address: '', phone: '', mapsrc: '', image: '' });
    setAddCameraOpen(false);
  };

  return (
    <>
      <div id="line">
        <h3>Our Stores</h3>
      </div>

      {/* Store List */}
      <div className="store-component">
        {stores.map((store, index) => (
          <div className="store-list" key={index}>
            {editingIndex === index ? (
              <div className="editmenu">
                {/* Image Preview */}
                {store.image && <img src={store.image} alt={store.name} width="300px" />}

                {/* File Upload */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        handleChange({ target: { value: reader.result } }, 'image', index);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />

                {/* Camera Toggle */}
                <button  id='editbtn' onClick={() => setIsCameraOpen(!isCameraOpen)}>
                  {isCameraOpen ? 'Close Camera' : 'Use Camera'}
                </button>

                {/* Webcam Component */}
                {isCameraOpen && (
                  <div>
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width={300}
                    />
                    <br />
                    <button onClick={() => captureImage(index)}>Capture Photo</button>
                  </div>
                )}

                {/* Editable Fields */}
                <input
                  type="text"
                  value={store.name}
                  onChange={(e) => handleChange(e, 'name', index)}
                  placeholder="Store Name"
                />
                <input
                  type="text"
                  value={store.address}
                  onChange={(e) => handleChange(e, 'address', index)}
                  placeholder="Store Address"
                />
                <input
                  type="text"
                  value={store.phone}
                  onChange={(e) => handleChange(e, 'phone', index)}
                  placeholder="Store Phone"
                />
                <input
                  type="text"
                  value={store.mapsrc}
                  onChange={(e) => handleChange(e, 'mapsrc', index)}
                  placeholder="Map Link"
                />

                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <>
                <img src={store.image} alt={store.name} width="300px" />
                <h2>{store.name}</h2>
                <p>{store.address}</p>
                <p>{store.phone}</p>
                <div className="map-wrapper">
                  <iframe src={store.mapsrc} height="200px" width="300px" title={store.name}></iframe>
                </div>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add New Store */}
      <h2 className="line2">Add New Store</h2>
      <div className="add">
        <div className="addmore">
          {/* Image Preview */}
          {newStore.image && <img src={newStore.image} alt="Preview" width="200px" />}

          {/* Input Fields */}
          <input
            type="text"
            value={newStore.name}
            onChange={(e) => setNewStore({ ...newStore, name: e.target.value })}
            placeholder="Store Name"
          />
          <input
            type="text"
            value={newStore.address}
            onChange={(e) => setNewStore({ ...newStore, address: e.target.value })}
            placeholder="Store Address"
          />
          <input
            type="text"
            value={newStore.phone}
            onChange={(e) => setNewStore({ ...newStore, phone: e.target.value })}
            placeholder="Contact"
          />
          <input
            type="text"
            value={newStore.mapsrc}
            onChange={(e) => setNewStore({ ...newStore, mapsrc: e.target.value })}
            placeholder="Google Map Link"
          />

          {/* File Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setNewStore({ ...newStore, image: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
          />

          {/* Camera Toggle for Add */}
          
          <button className='addbtn'  onClick={() => setAddCameraOpen(!addCameraOpen)}>
            {addCameraOpen ? 'Close Camera' : 'Use Camera'}
          </button>

          {/* Webcam for Adding New Store */}
          {addCameraOpen && (
            <div>
              <Webcam
                audio={false}
                ref={addWebcamRef}
                screenshotFormat="image/jpeg"
                width={300}
              />
              <br />
              <button className='addbtn' onClick={captureNewStoreImage}>Capture Photo</button>
            </div>
          )}
        <button className='addbtn' onClick={handleAddStore}>Add Store</button>
          
        </div>
      </div>
    </>
  );
}

export default Stores;
