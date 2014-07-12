---
layout: default
---

> A methodology for creating HTML and CSS

This library is built on the premise that the majority of page layouts can be acheived using a combination of two types of elements: things that stack and things that tile.

## Benefits

- Systematic
- Reusable CSS
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