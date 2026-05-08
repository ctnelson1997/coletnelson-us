import { Col, Container, Row } from 'react-bootstrap';
import { getAllPosts } from '../posts';
import BlogPostCard from './BlogPostCard';

export default function Blog() {
    const posts = getAllPosts();
    return (
        <Container>
            <Row style={{ justifyContent: 'center' }}>
                <Col xs={12} md={10} lg={8}>
                    <h1>Blog Posts</h1>
                    <p>My musings are my personal opinion and do not necessarily reflect the companies or institutions I work for. Please feel free to share and critique.</p>
                    <p style={{ fontSize: '0.9rem' }}>
                        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">Subscribe via RSS</a>
                    </p>
                    <hr />
                    {posts.map(post => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
