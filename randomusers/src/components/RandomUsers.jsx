import { useState, useEffect } from "react";

import UserSelect from "./UserSelect";
import UserRender from "./UserRender";

function RandomUsers() {
    const [randomusers, setRandomusers] = useState([]);
    const [userNum, setUserNum] = useState(5);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/?results=${userNum}`)
            .then(res => res.json())
            .then(users => setRandomusers(users.results))
            .catch(err => console.log(err));
    }, [userNum]);

    return (
       <>
        <div className="flex justify-center items-center">
            <div className="flex-col">
            <p className="text-3xl mx-5">Users:{randomusers.length}</p>

            <UserSelect setUserNum={setUserNum} />
            </div>

        </div>
        <div className="grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
               
            

                    {
                        randomusers.map((user, i) => (<UserRender key={i} user={user} />))
                    }
               
            

        </div>
        </> 
    )
}

export default RandomUsers