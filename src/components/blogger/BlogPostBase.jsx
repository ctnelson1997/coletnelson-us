import { Card } from "react-bootstrap";

export default function BlogPostBase(props) {
    return <Card style={{padding: "0.5rem"}}>
        <div style={{marginBottom: "0.5rem"}}>
            <h2>{props.title}</h2>
            <em>{props.posted}</em>
        </div>
        {props.children}
    </Card>
}