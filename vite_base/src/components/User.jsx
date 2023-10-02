
function User({user}) {
    const{name,username,email}=user;
  return (
    <div>
        <h2>Name:{name}</h2>
        <h3>Username:{username}</h3>
        <h4>Email:{email}</h4>
    </div>
  )
}

export default User