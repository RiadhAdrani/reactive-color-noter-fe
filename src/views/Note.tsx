import { useParams } from "react-router-dom";

export default () => {
    return <div>{useParams().id}</div>;
};
