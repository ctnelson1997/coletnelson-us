---
title: AI Will Kill Open Source
date: 2026-05-08
slug: ai-will-kill-open-source
description: A hypothesis on the recent Canvas breach — and how AI-assisted vulnerability discovery may push companies to close their source.
---

**tl;dr** AI didn't just democratize programming -- it democratized vulnerability discovery, for attackers and defenders alike. That changes the calculus on open source.

By now, you've probably heard about the [Canvas breach](https://www.instructure.com/canvas). I won't rehash the details (are they even known?), but I want to float a hypothesis: *Canvas being open source may have made the breach not just possible, but trivial.*

[A few months ago I wrote]((#/blog/free-visualization-tools)) about how I built [pytutor.org](https://pytutor.org) and [jstutor.org](https://jstutor.org) almost entirely by prompting Claude. I joked it was *2% my code and 98% Claude's*. That was meant to be a comment about programming. I've found it now to also be a comment about cybersecurity.

For the last twenty years, the dominant argument for open source has been Linus's law: *given enough eyeballs, all bugs are shallow.* The implicit assumption was that the eyeballs belonged to *someone like us* -- fellow developers, security researchers, the friendly kind of stranger. That assumption is starting to look quaint.

Finding a serious vulnerability in a large web application *used to* be expert work. Weeks of reading, fuzzing, chaining small oddities into something exploitable. The number of people on Earth who could do it on a given codebase was small, and most of them got paid to be polite about it.

That isn't really true anymore. Point an LLM at a public repo. Ask it to enumerate authentication paths. Ask it where untrusted input crosses a trust boundary. Ask it which queries are built with string concatenation. Wait a few hours. The output won't be perfect, but it doesn't *need* to be -- it needs to be cheap enough to try. What took experts weeks in the past now takes amateurs mere hours.

I plan to keep [my own tools](https://github.com/ctnelson1997/_tutor) open -- the math is different for a free classroom utility than for a multi-billion-dollar LMS, and I would rather a student fork [pytutor.org](http://pytutor.org/) or [jstutor.org](https://jstutor.org/) than have to email me for it. But I suspect more than a few engineering leaders are already having quieter conversations with their security teams about the future of their open-source projects.
