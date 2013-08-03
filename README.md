Study Mojito
=============

## How to use supervisor
```bash
$ supervisor -n error -e 'js|json|html' -x mojito start
```
or
```bash
$ supervisor -n error -e 'js|json|html' -x mojito -- start --context "environment:test"
```
or
```bash
$ supervisor -n error server.js
```
## How to use compass
```bash
$ compass watch --config .compass-ctrl/homepage.config.rb --trace
```
or
```bash
$ cd .compass-ctrl && compass watch --config homepage.config.rb --trace
```
compass with production environment, it will be compressed
```bash
$ compass compile --config .compass-ctrl/homepage.config.rb -e production --force
```
### how to use compass auto create css sprites
*  edit .compass-ctrl/homepage.config.rb, append these two lines code

```ruby
images_dir = "assets/images"
http_generated_images_path = "/static/assets/images"
```
* create assets/images/icons

```bash
$ mkdir -p assets/images/icons
```
* save your icons favorite.png into folder assets/images/icons
* edit sass file

```bash
$ vim mojits/pages/homepage/assets/scss/homepage.scss
```
```scss
$icons-layout: smart;
$icons-sprite-dimensions: true;
@import "icons/*.png";

.anyclass {
    @include icons-sprite(favorite);
}
```
is compiled to:

```css
.icons-sprite, .anyclass {
    background: url('/static/assets/images/icons-scea409d063.png') no-repeat;
}
.anyclass {
    background-position: 0 0;
    height: 13px;
    width: 13px;
}
```
