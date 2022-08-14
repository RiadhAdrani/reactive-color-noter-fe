import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { createNote, getUserNotes } from "../services";
import { IsUserLoggedIn } from "../utility";
import Spacer from "./Spacer";

export default () => {
    const [notes, setNotes] = useState([] as any[]);
    const isLoggedIn = IsUserLoggedIn();
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    async function fetch() {
        return getUserNotes(user.id!);
    }

    async function create() {
        const res = await createNote(user!.id as number);

        navigate(`/note/${res.id}`);
    }

    useEffect(() => {
        if (isLoggedIn) {
            fetch().then((res) => {
                if (Array.isArray(res)) {
                    setNotes(res);
                }
            });
        }
    }, [user ? user.id : -1]);

    return (
        <div>
            <Paper elevation={1}>
                <div className="Padding-8">
                    <div className="Row Padding-4" style={{ justifyContent: "space-between" }}>
                        <h2 style={{ margin: "0px" }}>Home</h2>
                        <Button variant="outlined" onClick={create}>
                            Create
                        </Button>
                    </div>

                    <hr color="#f5f5f5"></hr>
                    {notes.map((item) => (
                        <div key={item.id}>
                            <Link to={`/note/${item.id}`}>
                                <Paper>
                                    <div className="Note-card Column">
                                        {item.text || "This note contains... nothing ?"}
                                    </div>
                                </Paper>
                            </Link>
                            <Spacer height={10} />
                        </div>
                    ))}
                </div>
            </Paper>
        </div>
    );
};
