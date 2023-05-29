import { Link } from "react-router-dom";

export default function AdminPanel() {
    return (
        <div>
            <nav className="flex flex-col py-8 justify-between items-center gap-8 text-2xl inner text-lg">
                <Link to="/createPost">
                    <span className="text-4xl">+</span> blogpost
                </Link>
                <Link to="/signup">
                    <span className="text-4xl">+</span> Admin
                </Link>
                <Link to="/adminmessages">View messages</Link>
                <Link to="/"> LogOut </Link>
            </nav>
        </div>
    );
}
