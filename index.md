---
layout: default
---

## What is it?

GhettoBox is a set of dead-simple CSS components for doing page layout.

At the most basic level, it is a CSS grid system. However, once you familiarize yourself with it, you will see it provides significantly more than that.

<!--
It encourages creating designs rapidly at the template level AKA doing [Mockups in Markup](#).
-->

<div class="cs-2 pad-sm rnd-xs" markdown="1">

*Note:* GhettoBox is *not* meant to be a replacement for your favorite framework. It should be able to complement your toolset while staying out of the way as much as possible.

</div>

### Philosophy

The guiding principle is that most common layouts can be broken down into:

- Rectangles of predefined widths
- Padding inside the rectangles
- Content inside the padding (This controls the height of the rectangles)
- The rectangles flow left-to-right and wrap around when necessary
- Some helpers for alignment

Note that these are *not* original concepts by any means. The majority of CSS grid systems already fall under this description.

What *is* different is that GhettoBox gives you more control over the process.

- Vertical Alignment
- Widths, Padding, Font-Size, Alignment - Can be controlled per element and per screen size

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


<!--

### Why should I use it?

GhettoBox was created to alleviate some of the more frustrating aspects presented in other CSS framework:

- Vertical Alignment can't be done using floats
- Div Soup from nested row/col structures
- Specificity Wars

If any of the above have presented problems for you in the past, you may want to give GhettoBox a try.

-->

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

These will look familiar to those of you who use ... The difference here is that GhettoBox does not add gutters to your columns.

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