import { Button, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { unSet } from "../redux/user.slice";
import { IsUserLoggedIn } from "../utility";

export default () => {
    const isLogged = IsUserLoggedIn();

    const dispatch = useDispatch();

    function logout() {
        dispatch(unSet());
    }

    const items = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
    ];

    return (
        <div className="Navbar">
            <Paper>
                <div
                    className="Row Padding-8"
                    style={{ alignItems: "center", justifyContent: "space-between" }}
                >
                    <h4 style={{ margin: "0px" }}>Reactive Color Noter</h4>
                    <div>
                        {items.map((item) => (
                            <Link to={item.to} key={item.to}>
                                <Button>{item.label}</Button>
                            </Link>
                        ))}
                    </div>
                    {isLogged && <Button onClick={logout}>Logout</Button>}
                </div>
            </Paper>
        </div>
    );
};
