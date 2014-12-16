---
title: GhettoBox
layout: default
---

## What is it?

GhettoBox is a set of CSS micro-components for doing page layout.

At a basic level, it is akin to a CSS grid system. However, once you get to know it, you will see it provides a lot more than that.

<!-- <iframe style="height: 800px;" class="w-fill" src="demo-animation/" frameborder="0"></iframe> -->

GhettoBox is made to fit into your template layer. It's designed for rapidly creating page layouts and encourages creating [Mockups in Markup](#). It can however be used in a variety of other ways and with CSS preprocessors such as [Stylus](#) or [LESS](#).

<div class="cs-2 pad-sm rnd-xs" markdown="1">

*Note:* GhettoBox is not meant to be a replacement for your favorite framework. It should complement your toolset while staying out of the way as much as possible.

</div>

## You Crazy

GhettoBox is very different from other CSS libraries. It isn't going to meld with everyone's idea of what qualifies as "proper CSS".

I fully expect some people to hate on it. Haters gonna hate.

Give it a chance though - [just five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes). Even if you don't end up using it for anything, GhettoBox involves thinking about page layout in a different way. At the very least, it will provide you with a fresh perspective on how CSS can be successfully applied to HTML.

## Motivation

The majority of page layout can be created using a strict subset of the box-model:

- Content controls height
- Width is optionally specified
- Padding for space around/between elements
- Some helpers for alignment

- Content
- Rectangles of controlled width around the content that flow left-to-right and wrap around
- Space inside the rectangles to create space between content or to move content away from the edges

- Rectangles that flow left-to-right and wrap around
- Padding inside the rectangles
- Content inside the padding (This also controls the height of the rectangles)
- Some helpers for alignment

Note that these are *not* original concepts by any means. The majority of CSS grid systems already follow similar concepts.

What *is* different is that GhettoBox gives you more control in the process. It allows you to easily adjust:

- Horizontal & Vertical Alignment
- Padding
- Font-Size
- Width

And to be able to adjust them responsively depending on the screen size.

## What makes GhettoBox different?

Unlike other CSS frameworks such as Bootstrap or Foundation, GhettoBox provides only low-level components. It is designed to be used only for page layout and all it includes are simple, small, reusable units.

If you have worked with a CSS preprocessor before, you may find these micro-components comparable to mix-ins - the difference being that you apply the mix-ins driectly to HTML elements as opposed to CSS rules which are then applied to HTML elements. There is one less level of indirection.

<!--

### Comparison to "Semantic" grid systems

Benefits of this approach:

- We can see at a glance how an element will fit in its context
	- Space occupied
	- How does it interact with adjacent elements?
- Doing layout and markup in one place makes for a rapid workflow
	- Don't need to hunt down CSS rules
	- All in one context
	- Don't need to think up clever names/selectors
		- ".sidebar > li > a"
		- ".front-page-logo"
		- etc

Disadvantages:

- Can lead to verbosity in the markup
- CSS files can be bulky

-->

## Browsers

GhettoBox is tested and works in ...