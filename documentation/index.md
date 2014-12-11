---
title: GhettoBox Documentation
layout: default
---

# Documentation

## Screen Sizes

Almost all classes in GhettoBox can be selectively applied depending on the screen size.

<div class="cs-1 pad-sm rnd-xs" markdown="1">



</div>

We can control when the class is applied by prefixing the name of the screen size onto the class name.

For example, imagine we have two columns.

```html
<div class="tiles">
	<div class="tile w-1-2 pad-md">
		1
	</div>
	<div class="tile w-1-2 pad-md">
		2
	</div>
</div>
```

Let's say we only wanted them to act as columns (tiles) when the screen is of at least a medium size.

```html
<div class="tiles">
	<div class="md-tile md-w-1-2 pad-md">
		1
	</div>
	<div class="md-tile md-w-1-2 pad-md">
		2
	</div>
</div>
```

Note that these selective class-names are applied in a mobile-first fashion. This means that a class will apply to the specified screen size *as well as* all larger screen-sizes.

You can override a component provided

`.tile`,`.stack`,`.table`

`.pad-*`

## Naming Scheme

## Tiling

So you want your elements to be placed left-to-right instead of stacking? This is the place to start.

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