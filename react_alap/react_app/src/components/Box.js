import {useState} from 'react';

function Box({hatter,felirat,kezd}) {

    const[szamlalo,setSzamlalo]=useState(kezd);

    const onClick=()=>{
        setSzamlalo(prev=>prev+1);
    }

  return (
    <div onClick={onClick} className='p-3 m-3 rounded' style={{backgroundColor:hatter,width:"200px",height:"200px"}}>
        <h1>{felirat}</h1>
        <h2>{felirat}:{szamlalo}</h2>
    </div>
  )
}

export default Box