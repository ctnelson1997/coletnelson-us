import BlogPostBase from "../BlogPostBase";

export default function BlogPost003(props) {
    return <BlogPostBase title={"Free Visualization Tools"} posted={"March 26th, 2026"}>
       <p><strong>tl;dr</strong> Check out these free visualization tools I made for students and educators!</p>
       <ul>
            <li><a href="https://pytutor.org" target="_blank">pytutor.org</a> (Python)</li>
            <li><a href="https://jstutor.org" target="_blank">jstutor.org</a> (JavaScript)</li>
            <li><a href="https://javatutor.org" target="_blank">javatutor.org</a> (Java)</li>
       </ul>
       <hr/>
       <p>If a picture is worth <strong>1,000 words</strong>, a visualization is worth <strong>10,000 words</strong>.</p>
       <p>Visualizations are incredibly useful for explaining complex subjects, especially in programming. While I have bounced around a few different tools in my four years of teaching, none of them were quite <em>exactly</em> what I needed. Worse: ads, freemium features, and limited access made it difficult to present and use these visualizations in class.</p>
       <p>So, I set out to create some of these tools <em>on my own</em>. I will admit, <em>on my own</em> is a <em>generous</em> statement. I built the visualization tools below largely through prompting Claude to do my bidding; giving a rough guesstimate, I would say it is 2% my code and 98% Claude's. Another post for another time, I suppose.</p>
       <p>These tools are <a href="https://github.com/ctnelson1997/_tutor" target="_blank">free and open-sourced</a>, with every intention of staying that way! They are built to run right in the your browser, meaning there is no backend service or cost to me for hosting. <a target="_blank" href="https://github.com/ctnelson1997/_tutor/issues">Have bug reports or feature requests? Let me know!</a></p>
       <p><strong>Try them out now!</strong></p>
       <ul>
            <li><a href="https://pytutor.org" target="_blank">pytutor.org</a> (Python)</li>
            <li><a href="https://jstutor.org" target="_blank">jstutor.org</a> (JavaScript)</li>
            <li><a href="https://javatutor.org" target="_blank">javatutor.org</a> (Java)</li>
       </ul>
   </BlogPostBase>
}