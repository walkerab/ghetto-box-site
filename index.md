---
layout: default
---

## What is it?

GhettoBox is a set of CSS framework for creating page layouts. That's it.

### What makes GhettoBox different?

Unlike other CSS frameworks such as Bootstrap or Foundation, GhettoBox does not include any "components". It is designed to be used only for page layout and all it includes are simple class primitives.

GhettoBox is *not* meant to be a replacement for your favorite framework. It is meant to complement your toolset while staying out of the way as much as possible.

### Why should I use it?

GhettoBox was created to alleviate some of the more frustrating aspects presented in other CSS framework:

- Vertical Alignment can't be done using floats
- Div Soup from nested row/col structures
- Specificity Wars

If any of the above have presented problems for you in the past, you may want to give GhettoBox a try.

### Guiding Philosophy

In order to use GhettoBox, it may help to understand the thought process behind it. The guiding philosophy is that most common layouts can be represented as:

- Rectangles of predefined widths
- Padding inside the rectangles
- Content inside the padding
- The rectangles flow left-to-right and wrap around when necessary
- Some helpers for alignment

Note that these are *not* original concepts by any means.

What *is* different is that GhettoBox gives you more control through a concise, easy-to-use syntax. As well it provides responsive control for **all of the above**.

## Tiling

The `.tile` is the primary component for layout. It 

<div class="cs-1">
	<ul class="tiles tiles-justify">
		<li class="tile">
			<a href="#">
				These
			</a>
		</li>
		<li class="tile">
			<a href="#">
				Are
			</a>
		</li>
		<li class="tile">
			<a href="#">
				Links
			</a>
		</li>
	</ul>
</div>

## Widths

### Fraction Based

<div>
	<div class="w-1-3 cs-2">
		I am a third of the width
	</div>
</div>

### Line-Height Based

## Padding

<div class="tiles">
	<div class="cs-1 tile w-1-2 pad-md">
		<h3>First Column</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div
	><div class="cs-2 tile w-1-2 pad-md">
		<h3>Second Column</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</div>
</div>