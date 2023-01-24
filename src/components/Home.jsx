import { Col, Container, Row } from "react-bootstrap";
import Blog from "./Blog";
import BlogPostList from "./BlogPostList";

export default function Home() {
    
    return <Container>
        <Row>
            <Col xs={12} lg={6}>
                <div>
                    <h1>Cole Tyler Nelson</h1>
                    <h2 style={{ fontSize: "1rem", fontWeight: 400 }}>Graduate Student @ UW-Madison</h2>
                    <p><a target="_blank" href="https://www.coletnelson.us/assets/ctnelson2_resume.pdf">Download Resume</a> | <a target="_blank" href="https://www.coletnelson.us/assets/ctnelson2_cv.pdf">Download CV</a></p>
                    <hr/>
                    <p>Welcome! My name is Cole Nelson and I am a graduate student and computer science instructor for the University of Wisconsin-Madison. I have been teaching computer science classes since Spring of 2022 and have a passion for helping students understand and succeed in this exciting and rapidly-evolving field. I hold a B.S. in Software Engineering from the University of Wisconsin-Platteville, and will soon hold a M.S. in Computer Science from the University of Wisconsin-Madison. Outside of academia, I have worked in Software Engineering and Application Security for four years with <a target="_blank" href="https://nelnet.com/">Nelnet</a>, a federal student loan servicer.</p>
                    <p>I have a passion for <em>Computer Science Education</em>, <em>Application Security</em>, and <em>Human-Computer Interaction</em>. In my classes, I aim to not only teach students the technical skills they need to succeed in their studies and future careers, but also to help them develop critical thinking and problem-solving abilities that will serve them well in any field. I believe that every student has the potential to succeed in computer science and I am committed to helping them achieve their goals.</p>
                    <p>Please feel free to read through <a target="_blank" href="https://www.coletnelson.us/assets/ctnelson2_resume.pdf">my resume</a> and <a target="_blank" href="https://www.coletnelson.us/assets/ctnelson2_cv.pdf">my cv</a>, checkout my blog posts, and visit my other website <a target="_blank" href="http://www.cs571.org">cs571.org</a>. Thank you!</p>
                </div>
            </Col>
            <Col xs={12} lg={6}>
                <BlogPostList/>
            </Col>
        </Row>
    </Container>
}