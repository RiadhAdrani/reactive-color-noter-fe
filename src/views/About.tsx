import { Button, Paper } from "@mui/material";
import Spacer from "../widgets/Spacer";

export default () => {
    return (
        <Paper>
            <div className="Padding-16 Column">
                <h2>About the App</h2>
                <p>
                    Reactive Color Noter is a tiny project made by{" "}
                    <a href="https://github.com/RiadhAdrani" target={"_blank"}>
                        <strong>Riadh Adrani </strong>
                    </a>
                    in order to learn more about the <strong>React</strong> ecosystem and discover{" "}
                    <strong>Nest.js</strong>
                </p>
                <p>
                    <i>Source code:</i>
                </p>
                <ul>
                    <li>
                        <a
                            href="https://github.com/RiadhAdrani/reactive-color-noter-fe"
                            target={"_blank"}
                        >
                            Frontend repo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/RiadhAdrani/reactive-color-noter-be"
                            target={"_blank"}
                        >
                            Backend repo
                        </a>
                    </li>
                </ul>
                <p>
                    <i>Technologies and Libraries:</i>
                </p>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React Router</li>
                    <li>Material UI</li>
                    <li>Nest</li>
                    <li>Prisma</li>
                    <li>TypeScript</li>
                </ul>
            </div>
        </Paper>
    );
};
