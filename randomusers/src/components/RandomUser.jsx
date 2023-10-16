

function RandomUser({user,kapcsol}) {
  return (
    <div className="my-10 mx-5 card card-side bg-blue-300 shadow-xl">
    <figure><img className="w-48" src={user.picture.large} alt={user.name.first}/></figure>
    <div className="card-body h-48">
      <h2 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h2>
      <p>E-mail:{user.email}</p>
      <p>Phone:{user.phone}</p>
      <div className="card-actions justify-end">
        <button onClick={kapcsol} className="btn btn-primary">Részletek</button>
      </div>
    </div>
  </div>
  )
}

export default RandomUser