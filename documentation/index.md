---
title: GhettoBox Documentation
layout: default
---

# Documentation

## Screen Sizes

Almost all classes in GhettoBox can be selectively applied depending on the screen size.

In `variables.styl`:

	screen-sizes = {
		sm: 768px,
		md: 992px,
		lg: 1200px,
		xl: 1400px
	}

We can control when the class is applied by prefixing the name of the screen size onto the class name.

For example, imagine we have two columns.

~~~html
<div class="tiles">
	<div class="tile w-1-2 pad-md">
		1
	</div>
	<div class="tile w-1-2 pad-md">
		2
	</div>
</div>
~~~

Let's say we only wanted them to act as columns (tiles) when the screen is of at least a medium size (`992px`).

~~~html
<div class="tiles">
	<div class="md-tile md-w-1-2 pad-md">
		1
	</div>
	<div class="md-tile md-w-1-2 pad-md">
		2
	</div>
</div>
~~~

Note that these selective class-names are applied in a mobile-first fashion. This means that a class will apply to the specified screen size *as well as* all larger screen-sizes.

You can override a component provided

`.tile`,`.stack`,`.table`

`.pad-*`

## Naming Scheme

## Tiling

Probably the greatest feature of GhettoBox is the tiling system.

In the context of GhettoBox, an element that flows left-to-right and wraps around is referred to as a tile.

~~~html
<ul>
	<li>
		<a class="tile" href="#">
			These
		</a>
	</li>
	<li>
		<a class="tile" href="#">
			Are
		</a>
	</li>
	<li>
		<a class="tile" href="#">
			Links
		</a>
	</li>
</ul>
~~~

We made these list items inline by adding the `.tile` class.

A tile should be placed inside of a `.tiles` container element. This is to control the space (or lack thereof) between each `.tile`.

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

## Horizontal Alignment

## Vertical Alignment

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