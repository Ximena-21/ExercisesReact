import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/feed">Feed</Link>

    </div>
  )
}
