import {useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Image from './Image';
import UserContext from '../context/UserContext';

function Imagebin() {
    const {refresh}=useContext(UserContext);
    const[images,setImages]=useState([]);
    const[binimages,setBinImages]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        
            fetch(`${import.meta.env.VITE_BASE_URL}/getimages`,{
                method:'GET',
                headers:{
                    "Content-type":"application/json",
                    
                },
                //body:JSON.stringify({"username":"user1"})
            })
            .then(res=>res.json())
            .then(images=>{
                let tempimages=[];
                images.forEach(image => {

                    let arrayBuffer=new Uint8Array(image.imageData.data);
                    const blob=new Blob([arrayBuffer],{type:"image/png"});
                    const img=URL.createObjectURL(blob);
                    tempimages.push(img);       
                    //console.log(image.imageFilename);
                    
                });
                setImages(images);
                setBinImages(tempimages);
            })
            .catch(err=>alert(err));
        
    },[refresh]);


  return (
    <div>
        <p className='text-2xl text-center'>Képek adatbázisból</p>
        {
            binimages.map((image,i)=>(                    
               <p key={i}><img className='w-48' src={image}  /></p>           
            )
            )
        }
    </div>
  )
}

export default Imagebin