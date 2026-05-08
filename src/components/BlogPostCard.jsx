import { Link } from 'react-router-dom';
import { formatDate } from '../posts';
import './blog.css';

export default function BlogPostCard({ post }) {
    return (
        <Link to={`/blog/${post.slug}`} className="blog-card-link">
            <article className="blog-card">
                <h2 className="blog-card-title">{post.title}</h2>
                <div className="blog-card-meta">{formatDate(post.date)}</div>
                {post.description && <p className="blog-card-description">{post.description}</p>}
                <span className="blog-card-readmore">Read more &rarr;</span>
            </article>
        </Link>
    );
}
