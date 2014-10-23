---
layout: default
---

> A methodology for creating HTML and CSS

This library is built on the premise that the majority of page layouts can be acheived using a combination of a handful of CSS classes.

Bear with me here. Even if you are already familiar with OOCSS, I think you can take s

## Overview

Unless you are new to web development or you've been living under a rock for the past few years, you've probably encountered a concept known as OOCSS. While many (including myself) preach the underlying concepts, it is still a tough sell to other front-end developers.

Why don't they understand the benefit of this approach? It's as clear as mud!

A lot of people just don't "get it" and I don't blame them. When I first read about OOCSS, I thought people were nuts. It seemed completely absurd to litter my HTML with extraneous classes. Not only that, on top of *classitis*, OOCSS promotes *divitis*.

One of my goals here is to present concrete examples of how OOCSS can make your code indeed **more** beautiful and **more organized**.

For one there is a lot of fragmented opinions out there about what exactly it is. Second of all, 

What exactly is it?

### Structure

Structure includes things like 

### Skin

### Putting it in Action

To demonstrate the concept, I am going to use a CSS framework, Bootstrap. I'm using it because it will be familiar to most of you and not because it is a requirement for OOCSS or because it is "the best" way to do OOCSS. It is just a means to an end.

We are going to use Bootstrap for our **structure only**.

Imagine we are given a design like so:

![]

Let's create our structure

```html
<div class="container">
	<div class="row">
		<div class="col-sm-8">
		</div>
		<div class="col-sm-4">
		</div>
		...
	</div>
</div>
```

*benefit* I have created the entire page layout without touching a single line of CSS. Now that's efficient.

Now it's time to put a "skin" on the structure. To accomplish this, I am going to introduce a new concept, color schemes. A color scheme (for the sake of argument) consists of at least a background color and a foreground color. It can also include things like text-shadow or define anchor colors but for now we'll just stick to the two things.

Now you may be thinking, "I could have just done that using mixins. This is stupid.". Now ask yourself, would that have really been easier? Would that really be less work?

All you've really managed to do is move the problem. Not only that, you have made your CSS file larger and made your code harder to read. How is it harder to read?

Good code reveals its intent. Compare ... to ... ?

I don't know about you, but I'd prefer to not have to jump between my HTML and CSS to see what's going on.

## Benefits

- Systematic
- Reusable CSS
- Can sketch out an entire site without creating any CSS
- Beginner Friendly
- Don't have to think up names for things
- Code reveals its intent
- Design in the template

## Goals

- Use as few concepts as possible.
- Provide a sane and *reusable* set of classes
- Provide a systematic approach to page layout
- Provide a flexbox-like functionality until it attains wider support
- Stay out of the way by providing only minimal styling
- Separate skin from structure

## Examples

### Two Column Layout

```html
<div class="tile w-1-2 pad-md">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</div
><div class="tile w-1-2 pad-md">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</div>
```