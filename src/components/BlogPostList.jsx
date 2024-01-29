
import { useMemo } from "react";
import BlogPost000 from "./blogger/blogs/BlogPost000";
import { Col } from "react-bootstrap";
import BlogPost001 from "./blogger/blogs/BlogPost001";
import BlogPost002 from "./blogger/blogs/BlogPost002";

export default function BlogPostList(props) {
    const posts = useMemo(() => [
        <BlogPost002/>,
        <BlogPost001/>,
        <BlogPost000/>,
    ], [])
    const postyPosts = props.interval ? posts.slice(props.interval[0], props.interval[1]) : posts;
    return postyPosts.map(post => <Col xs={props.xs ? props.xs : 12} style={{ marginBottom: "1rem" }}>{post}</Col>)
}