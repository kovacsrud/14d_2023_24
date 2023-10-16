

function UserDetails({ user }) {
    return (

        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Details</h2>
                <p>{user.location.country},{user.location.city}</p>
                <p>{user.location.street.name} {user.location.street.number}</p>
                
            </div>
        </div>
    )
}

export default UserDetails