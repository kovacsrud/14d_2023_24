

function RandomUser({user}) {
  return (
    <div className="w-96 my-10 card card-side bg-blue-300 shadow-xl">
    <figure><img src={user.picture.large} alt={user.name.first}/></figure>
    <div className="card-body">
      <h2 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h2>
      <p>E-mail:{user.email}</p>
      <p>Phone:{user.phone}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Részletek</button>
      </div>
    </div>
  </div>
  )
}

export default RandomUser