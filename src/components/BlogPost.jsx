import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { formatDate, getPostBySlug } from '../posts';
import NoMatch from './NoMatch';
import './blog.css';

function ExternalLink({ href, children, ...rest }) {
    const isExternal = href && /^(https?:)?\/\//.test(href);
    if (isExternal) {
        return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
    }
    return <a href={href} {...rest}>{children}</a>;
}

export default function BlogPost() {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    useEffect(() => {
        if (post) document.title = `${post.title} — Cole Tyler Nelson`;
        return () => { document.title = 'Cole Tyler Nelson'; };
    }, [post]);

    if (!post) return <NoMatch />;

    return (
        <Container>
            <Row style={{ justifyContent: 'center' }}>
                <Col xs={12} md={10} lg={8}>
                    <Link to="/blog" className="blog-back">&larr; All posts</Link>
                    <article className="blog-post">
                        <header className="blog-post-header">
                            <h1 className="blog-post-title">{post.title}</h1>
                            <div className="blog-post-meta">{formatDate(post.date)}</div>
                        </header>
                        <div className="blog-post-body">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{ a: ExternalLink }}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>
                        <footer className="blog-post-disclaimer">
                            The views expressed in this post are my own and do not necessarily reflect the companies or institutions I work for.
                        </footer>
                    </article>
                </Col>
            </Row>
        </Container>
    );
}
