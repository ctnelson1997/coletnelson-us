import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            <h2>That's a 404.</h2>
            <p>Uh oh, looks like you got out of the Kanto region and ended up in Minnesota!</p>
            <p>
                <Link to="/">Back to safety.</Link>
            </p>
        </div>
    );
}
