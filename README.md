#Fort.js

Modern progress bar for form completion.
All you do is add the form and Fort.js' algorithm will take care of the rest. Best of all, it super small.

##Usage
Using Fort.js is so simple, it's simple. All you do is insert `fort.min.js` and  `fort.min.css` into the `<head>` then pop in an `<input>` into `<div class="top">`. Anything outside of the `<div>` won't count. Yep, that's all there is to it. Fort.js does the rest.
```html
<head>
  <script src="fort.min.js"></script>
  <link rel="stylesheet" href="fort.min.css">
</head>
```

You can also change the color of the progress bar by modifying `fort.min.css`.
```css
background: #000;
```
Think the progress bar speed is too slow or too fast? No worries. In the stylesheet just change the speed to your desired liking.
```css
transition: all 1s;
```
Additionally if you prefer the bottom rather the top, just change `top: 0;` to `bottom: 0;` in the stylesheet.

Want to change the height? Crack open the stylesheet and change `height: 4px;` to your liking.


**Gradients?**
Yup. All preset in the stylesheet. Just comment the regular background and uncomment the gradient background. Now choose your colors!
##Effects
 * [Default](http://colourity.github.io/)
 * [Gradient](http://colourity.github.io/gradient)
 * [Sections](http://colourity.github.io/sections)
 * [Flash](http://colourity.github.io/flash)

##Coming soon
 * More setting
 * Option to only include certain forms

##License
Fort.js is licensed under the MIT license.(http://opensource.org/licenses/MIT)
It pretty simple, but heres the definition we get

The MIT License is a permissive license that is short and to the point. It lets people do anything they want with your code as long as they provide attribution back to you and don't hold you liable.
##Acknowledgements

**Fort.js** is authored and maintained by Idris Khenchil


 * [My website](http://colourity.com) (colourity.com)


Feel free to check out the demo [here](http://colourity.github.io/).
