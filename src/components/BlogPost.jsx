import { Card } from "react-bootstrap";

export default function BlogPost() {
    return <Card style={{padding: "0.5rem"}}>
        <h2>Hello World!</h2>
        <em>{(new Date()).toLocaleDateString()}</em>
        <p>This is where I would write interesting things, if I had interesting things to say!</p>
    </Card>
}