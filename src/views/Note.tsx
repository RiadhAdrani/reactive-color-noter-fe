import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { getNote, saveNote } from "../services";
import { Note } from "../types";
import { IsUserLoggedIn } from "../utility";
import Spacer from "../widgets/Spacer";

export default () => {
    const id = parseInt(useParams().id as string);
    const hasAccess = IsUserLoggedIn();
    const nav = useNavigate();
    const [note, setNote] = useState<any>({ loading: true });
    const user = useSelector((state: RootState) => state.user);
    const [old, setOld] = useState<Note>({});

    const hasChanged = old.text !== note.text;

    async function get() {
        return getNote(id);
    }

    async function save() {
        await saveNote(note as Note);

        setOld(note);
    }

    function exit() {
        nav("/");
    }

    useEffect(() => {
        if (!hasAccess) {
            exit();
        } else {
            get().then((res) => {
                if (res) {
                    if (res.authorId == user.id) {
                        setNote(res);
                        setOld(res);
                    } else {
                        exit();
                    }
                }
            });
        }
    }, []);

    return (
        <div>
            <Paper>
                <div className="Padding-8 Column">
                    {note.loading ? (
                        <CircularProgress />
                    ) : (
                        <div className="Column">
                            <TextField
                                multiline={true}
                                minRows={4}
                                maxRows={20}
                                value={note.text}
                                onChange={(e) => {
                                    const text = e.currentTarget.value;

                                    setNote({ ...note, text });
                                }}
                            />
                            <Spacer height={10} />
                            {hasChanged && <p>You have some unsaved changes</p>}
                            <div className="Row" style={{ justifyContent: "flex-end" }}>
                                <Button variant="contained" onClick={save}>
                                    Save
                                </Button>
                                <Button onClick={exit}>Exit</Button>
                            </div>
                        </div>
                    )}
                </div>
            </Paper>
        </div>
    );
};
