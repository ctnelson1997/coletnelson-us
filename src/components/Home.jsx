import { Col, Container, Row } from "react-bootstrap";
import Blog from "./Blog";
import BlogPostList from "./BlogPostList";
import { Link } from "react-router-dom";

export default function Home() {
    
    return <Container>
        <Row>
            <Col xs={12} lg={6}>
                <div>
                    <h1>Cole Tyler Nelson</h1>
                    <h2 style={{ fontSize: "1rem", fontWeight: 400 }}>Instructor @ UW-Madison</h2>
                    <p><a target="_blank" href="https://coletnelson.us/assets/ctnelson2_resume.pdf">Download Resume</a> | <a target="_blank" href="https://coletnelson.us/assets/ctnelson2_cv.pdf">Download CV</a></p>
                    <hr/>
                    <p>Welcome! My name is Cole Nelson, and I am an instructor for Computer Sciences at the University of Wisconsin-Madison. I hold a B.S. in Software Engineering from the University of Wisconsin-Platteville and a M.S. in Computer Science from the University of Wisconsin-Madison. Outside of academia, I have worked in Software Engineering and Application Security for four years with <a target="_blank" href="https://nelnet.com/">Nelnet</a>, a federal student loan servicer. Interested in the intersection of <em>Computer Science Education</em> and <em>Application Security</em>? Let's talk!</p>
                    <p>Please feel free to read through <a target="_blank" href="https://coletnelson.us/assets/ctnelson2_resume.pdf">my resume</a> and <a target="_blank" href="https://coletnelson.us/assets/ctnelson2_cv.pdf">my cv</a>, checkout my blog posts, and visit my other website <a target="_blank" href="http://www.cs571.org">cs571.org</a>. Thank you!</p>
                </div>
            </Col>
            <Col xs={12} lg={6}>
                <BlogPostList interval={[0,1]}/>
                <p>View all my blog posts <Link to={'blog'}>here.</Link></p>
            </Col>
        </Row>
    </Container>
}