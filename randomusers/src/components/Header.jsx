
function Header({headerText}) {
  return (
    <div className="navbar bg-neutral text-neutral-content">
    <a className="btn btn-ghost normal-case text-xl">{headerText}</a>
  </div>
  )
}

export default Header;