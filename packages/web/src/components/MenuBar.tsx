import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <div className="flex flex-col fixed bottom-7 right-7 gap-2 items-end">
            <Link to="/" className="text-lg underline font-semibold">Home</Link>
            <Link to="/projects" className="text-lg">Projects</Link>
            <Link to="readLogs" className="text-lg">ReadLogs</Link>
        </div>
    );
};

export default MenuBar;

