This is the source for the [GhettoBox website](http://powerfulwizard.net/ghetto-box-live-site/) which serves as the documentation and examples for the [GhettoBox](https://github.com/walkerab/ghetto-box) project.

The generated site is hosted on Github Pages through a separate repo, [ghetto-box-live-site](https://github.com/walkerab/ghetto-box-live-site). That repo exists _only for hosting_ while this repo is _only for source_.

*IMPORTANT NOTE*: Although this project uses Jekyll, it does not use the Jekyll functionality built into Github Pages. This is so we are not limited to building in "safe mode" and can make use of extensions, etc.

## Setup / Usage

You will need installed:

- [Jekyll](http://jekyllrb.com/)
- [Bower](http://bower.io/)

------

Clone / fork this repo.

```
git clone https://github.com/walkerab/ghetto-box-site.git
```

-----

Install the Bower dependencies

```
bower install
```

-----

Build/serve up using Jekyll

```
jekyll serve --baseurl ''
```

You should then be able to view the site at [`http://localhost:4000`](http://localhost:4000)

## Contributing

Help is wanted for this project. I'd love to have some other sets of eyes on this as I am sure there are many important details I am skipping.

If you don't have the technical chops to make code contributions, that's fine. Just create an issue and someone can help make changes or make the changes for you.

What follows are what I think needs the most attention right now.

### Phrasing

I am not a writer. I am a programmer. The tone of my writing can be uncomfortable to many readers.

### Styling / Pizazz

I would like the site to have a consistent and polished design. It's a bit of a mixed bag right now.

### Selling the Idea

The biggest problem is making a convincing argument for someone to try out the library. There are a zillion crap CSS tools/frameworks/libraries out there and it is hard to distinguish a library like this among them. This is especially problematic when it promotes what many may consider to go against best practices. At face value it may seem like a real turd - using presentational class names almost exclusively.

The fact is GhettoBox is a really good CSS tool. Extensive research and practice has gone into its design. It however requires a different way of thinking about CSS - and that's where it gets tricky. Developers are stuck in their ways and are unwilling to take the time to learn yet another CSS library.

### Examples

Do you have something you've created using GhettoBox? We'd love to see it! Maybe it can be added to the examples page.

## Misc

Second level headings in page content are automatically placed into the sidebar navigation links.