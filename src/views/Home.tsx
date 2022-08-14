import { IsUserLoggedIn } from "../utility";
import CardGrid from "../widgets/CardGrid";
import SignInOut from "../widgets/SignInOut";

export default () => {
    const showHome = IsUserLoggedIn();

    let content;

    if (!showHome) {
        content = <SignInOut />;
    } else {
        content = <CardGrid />;
    }

    return <div> {content}</div>;
};
