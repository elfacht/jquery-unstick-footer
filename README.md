# Unstick Footer
## A simple jQuery plugin to unstick sticky footers

See the [demo](http://codepen.io/elfacht/pen/Ejmmbj)

### Usage

#### JavaScript
	$(function() {
		$('.sticky').unstickFooter({
			trigger: '.footer' // element that triggers the unsticking
		});
 	});
 
#### CSS
If you're not going to use the plugin CSS and wanna use a custom **baseClass**, be sure, that your CSS looks something like this:

	.yourBaseClass.is-sticky {
	  bottom: 0;
	  left: 0;
	  margin-bottom: 0;
	  position: fixed;
	  right: 0;
	  -webkit-transform: translate3d(0, 0, 0);
	  transform: translate3d(0,0,0); // to avoid flickering while scrolling
	}
 	
### Options

| Option       | Description 
| -------------|-------------
| trigger | *string, required* – Element that triggers the unsticking |
| baseClass | *string* – CSS class to use own CSS

### License
MIT Licensed, see [LICENSE](LICENSE.md) for details.