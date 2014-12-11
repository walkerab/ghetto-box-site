---
title: GhettoBox
layout: default
---

## What is it?

GhettoBox is a set of CSS micro-components for doing page layout.

At a basic level, it is akin to a CSS grid system. However, once you get to know it, you will see it provides a lot more than that.

GhettoBox fits best at the template layer. It's designed for rapidly creating page layouts and encourages creating [Mockups in Markup](#). It can however be used with CSS preprocessors such as Stylus and LESS.

<div class="cs-2 pad-sm rnd-xs" markdown="1">

*Note:* GhettoBox is not meant to be a replacement for your favorite framework. It is meant to complement your toolset while staying out of the way as much as possible.

</div>

<!-- ## How Does it Work?

It's not rocket surgery. You add the classes to your markup.

e.g. Imagine you had some HTML

	<p>
		This is a paragraph.
	</p>

If you wanted the paragraph to be half the width of its container you would add the `w-1-2` class.

	<p class="w-1-2">
		This is a paragraph.
	</p>

If you then wanted it to ... -->

## You Crazy

GhettoBox is very different from other CSS libraries. It isn't going to meld with every preconception of what qualifies as "proper CSS".

I fully expect some people to hate on it. Haters gonna hate.

Give it a chance though - [just five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes). Even if you don't end up using it for anything, GhettoBox involves thinking about page layout in a different way. At the very least, it will provide you with a fresh perspective on how CSS can be successfully applied to HTML.

Its use of presentational classes will be offensive to some. Its very nature seems to go against so-called CSS best practices, but as I am sure you have heard before, it is time to start [questioning best practices](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/#how-i-learned-to-stop-worrying-).

As bizarre as this library may look, there is a great deal of thought and research behind it and the decisions made.

- Avoid Bloat
- Avoid Specificity
- Keep it Simple - use as few concepts as possible


## Philosophy

The majority of page layout can be broken down into:

- Content
- Rectangles of controlled width around the content that flow left-to-right and wrap around
- Space inside the rectangles to create space between content or to move content away from the edges

- Rectangles that flow left-to-right and wrap around
- Padding inside the rectangles
- Content inside the padding (This also controls the height of the rectangles)
- Some helpers for alignment

Note that these are *not* original concepts by any means. The majority of CSS grid systems already follow similar concepts.

<div class="cs-1 pad-sm rnd-xs" markdown="1">

You may notice that margins are not listed as one of the major components for layout. GhettoBox takes the stance of setting `box-sizing: border-box` and always preferring padding over margins (when possible).

This approach comes with some added benefits:

1. A semi-unified way for handling negative space.
2. Simplified math - if you say something takes up X amount of space then it will simply occupy X amount of space. No `calc()` necessary.

<!-- http://csswizardry.com/2011/08/building-better-grid-systems/ -->

No gutters!

<!-- http://www.helloerik.com/the-subtle-magic-behind-why-the-bootstrap-3-grid-works -->
<!-- http://dbushell.com/2013/03/19/on-responsive-layout-and-grids/ -->

</div>

What *is* different is that GhettoBox gives you more control in the process. It allows you to easily adjust:

- Horizontal & Vertical Alignment
- Padding
- Font-Size
- Width

And to be able to adjust them responsively depending on the screen size.

## What makes GhettoBox different?

Unlike other CSS frameworks such as Bootstrap or Foundation, GhettoBox provides only low-level components. It is designed to be used only for page layout and all it includes are simple, small, reusable units.

If you have worked with a CSS preprocessor before, you may find these components comparable to mix-ins - the difference being that you apply the mix-ins to HTML elements as opposed to CSS rules.

Have you ever tried to understand someone else's CSS code? What GhettoBox lacks in ... it makes up for in simplicity.

- Gutters are opt-in instead of opt-out
- Inline block
	- Instead of floats to allow vertical / horizontal alignment
	- Instead of flex-box for consistent behaviour between browsers
- A defined class naming scheme: `.[condition-]component[-variant][-argument...]`
- Use as few concepts as possible

<!--

## Why should I use it?

GhettoBox was created to alleviate some of the more frustrating aspects presented in other CSS framework:

- Vertical Alignment can't be done using floats
- Div Soup from nested row/col structures
- Specificity Wars

If any of the above have presented problems for you in the past, you may want to give GhettoBox a try.

-->