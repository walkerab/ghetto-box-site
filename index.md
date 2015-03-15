---
title: GhettoBox
layout: default
---

## What is it?

GhettoBox is a set of CSS micro-components for doing page layout. That's it. 

Place the provided CSS class names in your markup to control width, height, padding, alignment, etc.

At the most basic level, it is akin to a CSS grid system. However, once you get to know it, you will see it provides much more than that.

It looks like this:

<iframe style="height: 520px;" class="w-fill" src="demo-animation/" frameborder="0"></iframe>

GhettoBox is designed to fit into your template layer. It's made for rapid page layout and prototyping and works nicely with [creating Mockups in Markup](http://24ways.org/2009/make-your-mockup-in-markup/).

<div class="cs-2 pad-sm rnd-xs" markdown="1">

*Note:* GhettoBox is not meant to be a replacement for your favorite framework. It should complement your existing tool-set while staying out of the way as much as possible.

</div>

GhettoBox is *exclusively for layout*. That means you will still need to create your own HTML/CSS components and styles.

You create the stylized components (e.g. buttons, sidebars, widgets, and pull-quotes) - GhettoBox will be there to help you size and position them.

### Make Layout Easy

More than anything, GhettoBox strives to **make layout easy**.

Let's face it, working with CSS can be a [finnicky, fidgety, frustrating, mess](images/PPML.gif). For any given task, there are a hundred different ways to go about it depending on context, preference, and browser support. They all break in there own special way.

We believe there is a better way. The theory being that by using **less** features of CSS, you can actually get **more** done with it.

GhettoBox takes the multitude of CSS layout options and narrows them down to a handful of primitives:

- [Padding](documentation/#padding)
- [Left-to-Right Placement](documentation/#tiling)
- [Widths](documentation/#widths)
- [Horizontal/Vertical Alignment](documentation/#alignment)

You may think that this would be limiting - that it would not be enough to create elegant or complex page structures, but the truth is, if used properly, the above will get you over 90% of the way there (if not all of the way).

As an added bonus, GhettoBox throws in functionality for:

- Font Sizing
- [Equal Height Columns](documentation/#equal-height-columns)
- [Responsiveness](documentation/#responsive)
- [Source Ordering](documentation/#source-ordering)

### Goals

The project goals:

- **Make HTML/CSS layout easy!**
	- Work with the document flow instead of fighting it
	- Sketching a layout should be as simple as drawing on graph paper
- Only handle what's directly related to layout
	- No widgets, dropdowns, popups, etc
	- No scripting or behaviour
- Promote a rapid workflow
	- One should be able to sketch out a page without writing any CSS
	- Create your mockup in markup!
- Stay out of the way as much as possible
	- Classes adhere to a specificity level of one
	- Limit global styling

## You Crazy

THe GhettoBox philosophy is to control layout from markup. This may not meld with your idea of what qualifies as "proper CSS". We fully expect some people to hate on it. **Haters gonna hate**.

Give it a chance though - [just five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes). Even if you don't end up using it for anything, GhettoBox involves thinking about page layout in a different way. At the very least, it will provide you with a fresh perspective on how CSS can be applied to HTML.

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

So why not just use mix-ins instead of mucking up our HTML? Here's the short answer: markup and layout are tightly connected. Ideally we should be configuring them from the same place. It doesn't make sense to handle nesting and ordering elements in HTML and then deal with alignment and sizing in a separate CSS file. The ideas are fundamentally interconnected.

DOM Layout is inherently contextual. Changing the size/position of one element will affect the size/position of its sibling or parent elements. What's nice about using class names as makeshift mix-ins (as opposed to preprocessor mix-ins) is that we don't lose sight of the context we are working in. We are in the HTML and we can, at a glance, see how the changing of one element will interact with its surroundings.

There is of course nothing wrong with using mix-ins and/or preprocessors. It's all about using the right tool for the job and we've found that when it comes to doing page layout, using pre-built classes generally makes life easier.

<!-- ## Browser Support

GhettoBox is tested and works in ... -->