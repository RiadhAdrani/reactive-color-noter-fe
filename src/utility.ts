import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export function IsUserLoggedIn(): boolean {
    const user = useSelector((state: RootState) => state.user);

    return user.email != undefined && user.id != undefined;
}
