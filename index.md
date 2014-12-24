---
title: GhettoBox
layout: default
---

## What is it?

GhettoBox is a set of CSS micro-components for doing page layout (and that's it).

At a basic level, it is akin to a CSS grid system. However, once you get to know it, you will see it provides a lot more than that.

<!-- <iframe style="height: 800px;" class="w-fill" src="demo-animation/" frameborder="0"></iframe> -->

GhettoBox is made to fit into your template layer. It's designed for rapidly creating page layouts and encourages creating [Mockups in Markup](#).

<div class="cs-2 pad-sm rnd-xs" markdown="1">

*Note:* GhettoBox is not meant to be a replacement for your favorite framework. It should complement your toolset while staying out of the way as much as possible.

</div>

## You Crazy

GhettoBox is very different from other CSS libraries. It isn't going to meld with everyone's idea of what qualifies as "proper CSS".

I fully expect some people to hate on it. Haters gonna hate.

Give it a chance though - [just five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes). Even if you don't end up using it for anything, GhettoBox involves thinking about page layout in a different way. At the very least, it will provide you with a fresh perspective on how CSS can be applied to HTML.

## Motivation

One of the hardest parts of web development is getting elements to appear where and how you want them. CSS can be frustrating tool to work with - especially for beginners. It often acts in ways that are unintuitive or difficult to work around.

While flexbox and web components may be the future of HTML/CSS, for now, we designers and developers are stuck working under some serious limitations.

...

More than anything, GhettoBox aims to **make layout easy**. It takes the majority of layout and narrows it down to some very basic core components:

- Padding
- Left-to-Right Placement
- Widths
- Horizontal/Vertical Alignment

In addition, it provides utilities for:

- Font Sizing
- Equal Height Columns
- Responsiveness

### Goals

The project goals:

- **Make HTML/CSS layout easy!**
	- Don't fight the document flow
- Beginner friendly
	- Do not require the use of a preprocessor
	- Stick to simple, easy-to-follow components
- Only handle what's directly related to layout
	- No widgets, dropdowns, popups, etc
	- No scripting or behaviour
- Promote a rapid workflow
	- One should be able to sketch out a page without writing any CSS
	- Create your mockup in markup!
- Stay out of the way as much as possible
	- Classes adhere to a specificity level of one
	- Limit global styling

## What's different?

Frameworks like Bootstrap and Foundation have done a great job of sidestepping many of the problems in creating HTML/CSS designs. They've done this by providing pre-made, well-documented, reusable components which have allowed even inexperienced developers to jump right in and start creating.

They do however have some weak points:

- no built-in way of handling vertical/horizontal alignment
- implicitly add gutters (padding) to columns even though you may not want them
- require dividing columns up into a `.row`s so that they wrap nicely
- override your styling with specificity (e.g. `.navbar-nav > li > a`)
- have _tons_ of variables in the preprocessor config code

GhettoBox isn't perfect either, but it does address the above. It is designed specifically for page layout and includes only simple micro-components.

If you have worked with a CSS preprocessor before, it may help to think about GhettoBox's components like mix-ins - the difference being that you apply the mix-ins directly to HTML elements as opposed to being applied to CSS rules which are then used on HTML elements.

So why not just use mix-ins instead of mucking up our HTML? Here's the short answer:

DOM Layout is inherently contextual. Changing the size/position of one element will affect the size/position of its sibling or parent elements. What's nice about using class names as makeshift mix-ins (as opposed to preprocessor mix-ins) is that we don't lose sight of the context we are working in. We are in the HTML and we can, at a glance, see how the changing of one element will interact with its surroundings.

There is of course nothing wrong with using mix-ins and/or preprocessors. It's all about using the right tool for the job and we've found that when it comes to doing page layout, using pre-built classes generally makes life easier.

<!-- ## Browser Support

GhettoBox is tested and works in ... -->