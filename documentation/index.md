---
title: GhettoBox Documentation
layout: default
---

## Padding

GhettoBox supports a simple mechanism for maintaining consistent spacing in and around your elements: **padding**.

This isn't exactly a major breakthrough.

The difference here is that other CSS layout systems typically will apply padding without you asking (e.g. for gutters) while GhettoBox applies padding only when you tell it to do so.

### Usage

Padding is specified using the `.pad-{size}` and `.pad-{side}-{size}` classes.

<div class="sm-table">

<div class="sm-table-cell sm-w-1-3 cs-2 pad-md" markdown="1">

The sides are:

- top
- bottom
- left
- right
		
</div>

<div class="sm-table-cell sm-w-2-3 cs-1 pad-md" markdown="1">

The sizes are:

`nil`
: no padding <small class="fs-sm">(useful for removing padding at [different screen sizes](#responsive))</small>

`xs`
: equivalent to `line-height ÷ 4`

`sm`
: equivalent to `line-height ÷ 2`

`md`
: equivalent to `line-height`

`lg`
: equivalent to `line-height x 2`

`xl`
: equivalent to `line-height x 4`
		
</div>

</div>

<div class="cs-2 pad-md" markdown="1">

The padding sizes are by default based on line-height. This helps maintain a vertical rhythm. Also since line-height is easily visualized, choosing the appropriate padding becomes straightforward.

</div>

By itself, padding isn't terribly exciting. However, it really shines when combined with other components.

## Tiling

The core feature of GhettoBox is the tiling system. It is what controls left-to-right layout.

<div class="cs-1 pad-md" markdown="1">

In the context of GhettoBox, an element that flows left-to-right and wraps around is referred to as a **tile**.
	
</div>

Tiling requires the use of at least two CSS classes:

`.tile`
: Identifies each tile element

`.tiles`
: The container for the tile elements

### Example

~~~html
<ul class="tiles">
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

<div class="cs-1">
	<ul class="tiles pad-sm">
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

We made these list items inline by adding the `.tile` class. The surrounding `.tile` class will control the space between each `.tile` (or lack thereof).

As is, this is not very useful. We need to have some space between our links!

Let's throw in some padding.

~~~html
<ul class="tiles">
	<li>
		<a class="tile pad-xs" href="#">
			These
		</a>
	</li>
	<li>
		<a class="tile pad-xs" href="#">
			Are
		</a>
	</li>
	<li>
		<a class="tile pad-xs" href="#">
			Links
		</a>
	</li>
</ul>
~~~

<div class="cs-1">
	<ul class="tiles pad-xs">
		<li class="tile pad-xs">
			<a href="#">
				These
			</a>
		</li>
		<li class="tile pad-xs">
			<a href="#">
				Are
			</a>
		</li>
		<li class="tile pad-xs">
			<a href="#">
				Links
			</a>
		</li>
	</ul>
</div>

## Widths

We can control the width of an element using one of the width classes. They look like this: `.w-{numerator}-{denominator}`.

~~~html
<div class="w-1-3">
	The width is a third of the width of the containing space.
</div>
~~~

<div class="w-1-3 cs-1">
	The width is a third of the width of the containing space.
</div>

By default there are ... These can be customized in `variables.styl`.

<div class="cs-2 pad-sm" markdown="1">

**NOTE:** In addition to the `.w-*-*` classes there is also a special class, `.w-fill`. It makes an element 100% the width of its parent element.

</div>

Using widths we can, like in a grid system, create columns. To do this we make an element act as a tile and then give it a width.

~~~html
<div class="tiles">
	<div class="tile w-1-2">
		First Column
	</div>
	<div class="tile w-1-2">
		Second Column
	</div>
</div>
~~~

<div class="tiles">
	<div class="tile w-1-2 cs-2">
		First Column
	</div>
	<div class="tile w-1-2 cs-1">
		Second Column
	</div>
</div>

Unlike other grid systems, these "columns" do not include gutters by default. If we want to have gutters, it's only a matter of adding padding to the elements.

<div class="tiles">
	<div class="tile w-1-3 pad-sm cs-2"><pre><code>.tile
.w-1-3
.pad-sm</code></pre></div>
	<div class="tile w-1-3 pad-sm cs-1"><pre><code>.tile
.w-1-3
.pad-sm</code></pre></div>
	<div class="tile w-1-3 pad-sm cs-2"><pre><code>.tile
.w-1-3
.pad-sm</code></pre></div>
	<div class="tile w-1-3 pad-sm cs-1"><pre><code>.tile
.w-1-3
.pad-sm</code></pre></div>
	<div class="tile w-1-3 pad-sm cs-2"><pre><code>.tile
.w-1-3
.pad-sm</code></pre></div>
	<div class="tile w-1-3 pad-sm cs-1"><pre><code>.tile
.w-1-3
.pad-sm</code></pre></div>
</div>

## Alignment

Tiles can be aligned both vertically and/or horizontally.

For **vertical alignment** we add one of these `.tile-*` variants to our tile elements:

`.tile-top`
: Align the top of this tile with the top of the tallest tile on the same line (the default behaviour)

`.tile-middle`
: Align the middle of this tile with the middle of the tallest tile on the same line

`.tile-bottom`
: Align the bottom of this tile with the bottom of the tallest tile on the same line

While for **horizontal alignment** we add one of the `.tiles-*` variants to the surrounding `.tiles` element:

`.tiles-left`
: Place tiles on the left side (the default behaviour)

`.tiles-center`
: Place tiles in the center

`.tiles-right`
: Place tiles on the right side

`.tiles-justify`
: Distribute space between tiles so that, when possible, they meet the left and right edge of each line (Thank CrocoDillon for his work on [Justify Grid](http://justifygrid.com/))

### Text Alignment

### Example: Vertically Align 

~~~html
<div class="tiles">
	<div class="tile tile-middle w-1-2">
		<img
			src="../examples/images/spiral.svg"
			alt="swirly whirly"
			class="w-fill"
		>
	</div>
	<div class="tile tile-middle w-1-2 text-center">
		TRIPPY<br>
		JUNK
	</div>
</div>
~~~

<div class="tiles">
	<div class="tile tile-middle w-1-2">
		<img src="../examples/images/spiral.svg" alt="swirly whirly" class="w-fill">
	</div>
	<div class="tile tile-middle w-1-2 text-center">
		TRIPPY<br>
		JUNK
	</div>
</div>

### Example: Nav Bar

## Source Ordering

`.shift-*-*-*`

## Equal Height Columns


## Responsive

Almost all classes in GhettoBox can be selectively applied depending on the screen size.

In `variables.styl`:

~~~javascript
	screen-sizes = {
		sm: 768px,
		md: 992px,
		lg: 1200px,
		xl: 1400px
	}
~~~

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