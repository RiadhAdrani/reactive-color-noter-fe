import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { set } from "../redux/user.slice";
import { authUser, createUser } from "../services";

export default () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [isLogin, setLogin] = useState(true);
    const [alert, setAlert] = useState("");

    const toggle = () => {
        setAlert("");
        setLogin(!isLogin);
    };

    const onClick = async () => {
        setAlert("");

        if (isLogin) {
            const res = await authUser(email);
            if (!res) {
                setAlert("Cannot find user.");
            } else {
                dispatch(set(res));
                setAlert("");
            }
        } else {
            const res = await createUser(email);

            if (typeof res == "string") {
                setAlert(res);
            } else {
                toggle();
            }
        }
    };

    const text = isLogin ? "Login" : "Sign in";

    return (
        <div>
            <Paper elevation={1}>
                <div className="Column Padding-16">
                    <h2>{text}</h2>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="Spacing-4" />
                    {alert && <span>{alert}</span>}
                    <div className="Spacing-4" />
                    <Button variant="contained" onClick={onClick}>
                        {text}
                    </Button>
                    <div className="Spacing-4" />
                    <Button variant="text" onClick={toggle}>
                        {isLogin ? "Create an account" : "Login instead"}
                    </Button>
                </div>
            </Paper>
        </div>
    );
};
