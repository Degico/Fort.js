#Fort.js

Modern progress bar for form completion.


##Usage
Using Fort.js is so simple, its simple. All you do is insert `fort.min.css` and  `fort.min.css` into the `<head>` and pop in an `<input>` into `<div clas="top">`. Anything outside of the `<div>` won't count. And don't forget jQuery. Yep, that's all there is to it. Fort.js does the rest (but you can do it too) No need to add an `<id>`.
```html
<head>
  <script src="fort.min.js"></script>
  <link rel="stylesheet" href="fort.min.css">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
</head>
```

You can also change the color of the progress bar by modifying `fort.min.css`.
```css
background: #000;
```
Think the progress bar speed it too slow or too fast? No worries. In the stylesheet just change the speed to your desired liking.
```css
transition: all 1s;
```
Additionally if you prefer the bottom rather the top, just change `top: 0;` to `bottom: 0;` in the stylesheet.

##License
Fort.js is licensed under the MIT license.(http://opensource.org/licenses/MIT)

##Acknowledgements

**Fort.js** is authored and maintained by Idris Khenchil


 * [My website](http://colourity.com) (colourity.com)
 * [Github](http://github.com/colourity) (@colourity)

Feel free to check out the demo [here](http://colourity.github.io/) and if this was helpful maybe buy me a coffee?  
