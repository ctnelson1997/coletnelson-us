import { Col } from "react-bootstrap";
import BlogPost from "./BlogPost";

export default function BlogPostList(props) {
    return  [1, 2, 3, 4, 5].map((i) => <Col xs={props.xs ? props.xs : 12} style={{ marginBottom: "1rem" }}><BlogPost /></Col>)
}