import { useState, useEffect } from "react";
import RandomUser from "./RandomUser";
import UserSelect from "./UserSelect";

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
        <div className="flex justify-center items-center">
               <div className="flex-column">
                    <p className="text-3xl mx-5">Users:{randomusers.length}</p>

                    <UserSelect setUserNum={setUserNum} />

                    {
                        randomusers.map((user, i) => (<RandomUser key={i} user={user} />))
                    }
                </div>
            

        </div>
    )
}

export default RandomUsers