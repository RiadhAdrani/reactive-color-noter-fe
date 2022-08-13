import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getUserNotes } from "../services";
import { IsUserLoggedIn } from "../utility";

export default () => {
    const [notes, setNotes] = useState([] as any[]);
    const isLoggedIn = IsUserLoggedIn();
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        function fetch() {
            return getUserNotes(user.id!);
        }

        if (isLoggedIn) {
            fetch().then((res) => {
                if (Array.isArray(res)) {
                    setNotes(res);
                }
            });
        }
    }, []);

    return (
        <div>
            <Button variant="text">New note</Button>
            {notes.map((item) => (
                <Paper>
                    <div className="Note-card Column" key={item.id}>
                        {item.text}
                    </div>
                </Paper>
            ))}
        </div>
    );
};
