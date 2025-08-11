import { useState } from 'react'
import React from 'react'
import data from './Store.json'
import './Stores.css'
function Stores() {
  const [stores , setStores] = useState(data.store);
  const [editingIndex,setEditingIndex] = useState(null);


  const handleChange =(e,field , index) =>{
    const updatedStores = [...stores];
    updatedStores[index][field] = e.target.value;
    setStores(updatedStores); 
  }

  const handleEdit = (index)=>{
    setEditingIndex(index);
  }
  const handleUpdate=()=>{
    setEditingIndex(null);
  }
  return (
    <>
    <div id='line'>
        <h3 >Our Stores</h3>
    </div>
    <div>
       <div className='store-component' >
        
        {data.store.map((store,index)=>(
         
                <div className='store-list' key={index} >
                  {editingIndex === index ? (
                    <>
                    <div className='editmenu'>
                      <input id='file' type='file'
                        accept='image'
                        onChange={(e)=>{
                          const file = e.target.files[0];
                          if(file){
                            const reader= new FileReader();
                            reader.onloadened = () =>{
                              handleChange({target:{value:reader.result}},'image',index);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        />
                      <br />
                      <input type='text' value={store.name}
                        onChange={(e)=> handleChange(e,'name',index)}
                        placeholder='Store Name'
                      />
                      <br />
                      <input type='text' value={store.address}
                        onChange={(e)=>handleChange(e,'address',index)}
                        placeholder='Store Address'
                      />
                      <br />
                      <input type='text' value={store.phone}
                        onChange={(e)=>handleChange(e,'phone',index)}
                        placeholder='Store Phone'
                      />
                      <br />
                      <input type='text' value={store.mapsrc}
                        onChange={(e)=>handleChange(e,'mapsrc',index)}
                        placeholder='Map Link'
                      />
                      <br />
                      <button onClick={handleUpdate}>Update</button>
                    </div>
                    </>
                   
                  ):(
                    <>
                    <img src={store.image} alt={store.name} width="300px" />
                    <h2>{store.name}</h2>
                    <p>{store.address}</p>
                    <p>{store.phone}</p>
                    <div className='map-wrapper'>
                    <iframe  src={store.mapsrc} height="200px" width="300px"></iframe>
                    </div>
                    <button onClick={()=>handleEdit(index)} >Edit</button>
                    </>
                    )}
                </div>
                
         
        ))}
      </div>
    </div>
     <h2 className='line2' >Add New Store</h2><br/><br/>
     <div  className='add'>
      <div className='addmore'>
            <input type='text' placeholder='Store Name'/>
            <input type='text' placeholder='Store Address'/>
            <input type='text' placeholder='Contact'/>
            <input type='text' placeholder='Googlt Map Link'/>
            <input className='addmore' type='file' accept='image' />
            <button>Add </button>
      </div>
    </div>

    </>
  )
}

export default Stores