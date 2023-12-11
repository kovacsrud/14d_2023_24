
type HeaderProps={
    headerText:string,
    id:number
}

function Header({headerText,id}:HeaderProps) {
  return (
    <div>
        <h2>{headerText}</h2>
        <p>{id}</p>
    </div>
  )
}

export default Header