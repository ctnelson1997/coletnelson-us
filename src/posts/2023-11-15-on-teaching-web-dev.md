---
title: On Teaching Web Dev
date: 2023-11-15
slug: on-teaching-web-dev
description: Reflections on teaching CS571 and what should make up the foundation of a web development education.
---

Fall 2023 marks my third semester of teaching [CS571: Building User Interfaces](https://www.cs571.org/), which I began teaching as a graduate student at UW. While this class covers many topics, a core topic is web development. One thing that has immediately become apparent is how much change occurs in this space.

The class teaches the fundamentals of web programming, primarily HTML, CSS, and JS, then moves on to modern libraries and frameworks such as [React](https://react.dev/) and [React Native](https://reactnative.dev/). As such, the class is exposed to the whims of the React and JavaScript community. A shortlist of what has changed in the last year includes...

- The silent passing of [create-react-app](https://create-react-app.dev/)
- A [new engine](https://reactnative.dev/docs/hermes) for React Native
- A move towards [server-side rendering](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)

And most critically... **the end of [class components](https://legacy.reactjs.org/)!** (okay, a little late to the game on this one). All of these are not *bad* changes, though. In fact, they are quite necessary evolutions of the environment. The question is, however: *what should we teach at the university*?

On one hand, there is a need to prepare developers for practical technologies -- Pascal and LISP can only take you so far. On the other, university is the place to grow knowledge that can be applicable in *any* domain. So, what are the core fundamentals? Good question! In fact, it's such a good question that I don't think we can agree on it.

If the question was asked in the early 2000s, the answer would be Java applets! Java applets will drive all interactive content on the web! In the late 2000s: Flash! Flash will drive all interactive content on the web! And for now, it's JavaScript. JavaScript drives all the interactive content on the web.

Will this change? Probably. In fact, contenders like [TypeScript](https://www.typescriptlang.org/) stand to upset the space. So, what should we teach? I think that we should teach what students want to learn. If that is JavaScript, let it be JavaScript. If that is TypeScript, let it be TypeScript. If that is React, let it be React. If that is PHP, let someone else teach PHP.

If an education is the castle that we are building, it is inevitable that its foundation finds its rest on rocks and sand. Let the instructor choose the rocks, and let the students choose the sand.
