---
title: GhettoBox
layout: default
---

## What is it?

GhettoBox is a set of dead-simple CSS components for doing page layout.

At a basic level, it is somewhat like a CSS grid system. However, once you familiarize yourself with it, you will see it provides significantly more than that.

It is designed to be used in your templates for rapidly creating page layouts.

<!--
It encourages creating designs rapidly at the template level AKA doing [Mockups in Markup](#).
-->

<div class="cs-2 pad-sm rnd-xs" markdown="1">

*Note:* GhettoBox is *not* meant to be a replacement for your favorite framework. It should be able to complement your toolset while staying out of the way as much as possible.

</div>

<!-- ### How Does it Work?

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

### Give it Five Minutes

GhettoBox is very different from other CSS libraries. Not only that, it is not going to fit into everyone's workflow.

I fully expect some people to hate on it. Haters gonna hate.

Its use of presentational classes will be offensive to some. Its very nature seems to go against so-called CSS best practices, but as I am sure you have heard before, it is time to start questioning best practices.

As bizarre as this library may look, there is a great deal of thought and research behind it and the decisions made.

- Avoid Bloat
- Avoid Specificity
- Keep it Simple!

### Philosophy

The guiding principle is that most page layouts can be broken down into:

- Rectangles that flow left-to-right and wrap around
- Padding inside the rectangles
- Content inside the padding (This controls the height of the rectangles)
- Some helpers for alignment

Note that these are *not* original concepts by any means. The majority of CSS grid systems already follow similar concepts.

What *is* different is that GhettoBox gives you more control in the process. It allows you to easily adjust:

- Horizontal & Vertical Alignment
- Padding
- Font-Size
- Width

And to be able to adjust them responsively depending on the screen size.

<!--
### Give it Five Minutes

For many of you, this may sound like crazy talk, but I urge you to take five minutes and let it absorb. You have little to lose by trying it.


	https://www.lucidchart.com/techblog/2014/01/31/atomic-css-tool-set/
	https://github.com/nemophrost/atomic-css
	http://www.smashingmagazine.com/2013/10/21/challenging-css-best-practices-atomic-approach/
	https://www.npmjs.org/package/atom-css
	? http://forum.upcase.com/t/thoughts-on-single-use-atomic-css-classes/2873/4
-->

### What makes GhettoBox different?

Unlike other CSS frameworks such as Bootstrap or Foundation, GhettoBox provides only low-level components. It is designed to be used only for page layout and all it includes are simple, small, reusable units.

If you have worked with a CSS preprocessor before, you may find these components comparable to mix-ins - the difference being that you apply the mix-ins to HTML elements as opposed to CSS rules.

Have you ever tried to understand someone else's CSS code? What GhettoBox lacks in ... it makes up for in simplicity.

<!--

### Why should I use it?

GhettoBox was created to alleviate some of the more frustrating aspects presented in other CSS framework:

- Vertical Alignment can't be done using floats
- Div Soup from nested row/col structures
- Specificity Wars

If any of the above have presented problems for you in the past, you may want to give GhettoBox a try.

-->