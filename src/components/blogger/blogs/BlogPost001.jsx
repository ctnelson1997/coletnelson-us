import BlogPostBase from "../BlogPostBase";

export default function BlogPost001(props) {
    return <BlogPostBase title={"On Teaching Web Dev"} posted={"November 15th, 2023"}>
        <p>Fall 2023 marks my third semester of teaching <a target="_blank" href="https://www.cs571.org/">CS571: Building User Interfaces</a>, which I began teaching as a graduate student at UW. While this class covers many topics, a core topic is web development. One thing that has immediately become apparent is how much change occurs in this space.</p>
        <p>The class teaches the fundamentals of web programming, primarily HTML, CSS, and JS, then moves on to modern libraries and frameworks such as <a target="_blank" href="https://react.dev/">React</a> and <a target="_blank" href="https://reactnative.dev/">React Native</a>. As such, the class is exposed to the whims of the React and JavaScript community. A shortlist of what has changed in the last year includes...</p>
        <ul>
            <li>The silent passing of <a target="_blank" href="https://create-react-app.dev/">create-react-app</a></li>
            <li>A <a target="_blank" href="https://reactnative.dev/docs/hermes">new engine</a> for React Native</li>
            <li>A move towards <a target="_blank" href="https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components">server-side rendering</a></li>
        </ul>
        <p>And most critically... <strong>the end of <a target="_blank" href="https://legacy.reactjs.org/">class components</a>!</strong> (okay, a little late to the game on this one). All of these are not <em>bad</em> changes, though. In fact, they are quite necessary evolutions of the environment. The question is, however: <em>what should we teach at the university</em>?</p>
        <p>On one hand, there is a need to prepare developers for practical technologies -- Pascal and LISP can only take you so far. On the other, university is the place to grow knowledge that can be applicable in <em>any</em> domain. So, what are the core fundamentals? Good question! In fact, it's such a good question that I don't think we can agree on it.</p>
        <p>If the question was asked in the early 2000s, the answer would be Java applets! Java applets will drive all interactive content on the web! In the late 2000s: Flash! Flash will drive all interactive content on the web! And for now, it's JavaScript. JavaScript drives all the interactive content on the web.</p>
        <p>Will this change? Probably. In fact, contenders like <a target="_blank" href="https://www.typescriptlang.org/">TypeScript</a> stand to upset the space. So, what should we teach? I think that we should teach what students want to learn. If that is JavaScript, let it be JavaScript. If that is TypeScript, let it be TypeScript. If that is React, let it be React. If that is PHP, let someone else teach PHP.</p>
        <p>If an education is the castle that we are building, it is inevitable that its foundation finds its rest on rocks and sand. Let the instructor choose the rocks, and let the students choose the sand.</p>
    </BlogPostBase>
}