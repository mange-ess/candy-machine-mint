// the FinnAsset component
import { useParams } from "react-router-dom";

export default function FinnAsset() {
    // get the username from route params
    const { id } = useParams();

    // now we have access to the username that came from the URL
    return <div>hi there {username}</div>;
}
