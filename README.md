# Frictionless Data

## Getting up and running

This site is built with [Lektor](https://www.getlektor.com/).

It has a bunch of [dependencies](package.json), so do `npm install` and then `npm run build`.

`grunt` will watch for changes to your [SCSS files](assets/scss), and also [icons](assets/icons) (see [svgstore](https://github.com/FWeinb/grunt-svgstore)).

`lektor deploy` will deploy to the gh-pages branch, putting changes live, if you have deploy permissions.


## Notes on content (in Markdown)

### Code

Use fenced blocks like so:


    ```python
    print "Hello World!"
    ```


### Notes / alerts

Prefix your paragraph with exclamation marks:

```
! a note

!! an informational message

!!! a tip

!!!! a warning
```

### Tables

Use HTML.
