import { ReactNode } from "react"

type SubheaderProps={
    children:string|ReactNode
}

function Subheader({children}:SubheaderProps) {
  return (
    <h3>{children}</h3>
  )
}

export default Subheader