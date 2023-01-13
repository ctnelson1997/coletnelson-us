import { Col, Container, Row } from "react-bootstrap";
import BlogPost from "./BlogPost";
import BlogPostList from "./BlogPostList";

export default function Blog() {
    return <Container>
        <Row style={{ justifyContent: "center" }}>
            <Col xs={7} style={{marginBottom: "1rem"}}>
                <h1>Blog Posts</h1>
                <p>My musings are my personal opinion and do not necessarily reflect the companies or institutions I work for. Please feel free to share and critique.</p>
                <hr/>
            </Col>
            <BlogPostList xs={7}/>
        </Row>
    </Container>;
}