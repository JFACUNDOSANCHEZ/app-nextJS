import Link from "next/link"
import "../app/styles/globals.css"
const Nav = ()=>{

return(
<nav className="bg-blue-500 text-white p-3 text-3xl py-4">
  <div className="flex justify-end">
    <ul className="flex space-x-4">
      <li>
        <Link href="/" className="">Home</Link>
      </li>
     
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/post">Post</Link>
      </li>
    </ul>
  </div>
</nav>
)

}

export default Nav