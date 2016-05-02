## Home made launches 

---

Cut, paste & rename.

Boom, you're ready to go...


#### html 
This is ready to go out the box and includes the following
* Foundation
* Jquery
* Normalise
* Underscore
* Backbone

NB- this is a dev edition and remember to strip out the bloat before shipping

#### Gulp 
This is ready to go out the box just run the following commands...

Make a new folder.

Run ``` npm init ```

Cut and paste folders. 

Run this 

``` npm install gulp gulp-autoprefixer gulp-autoprefixer gulp-changed gulp-connect gulp-imagemin gulp-plumber gulp-sass vinyl-source-stream gulp-uglify browserify --save-dev  ```
``` npm install jquery underscore --save ```

Here's a snippet from the gulpfile.js

```
"dependencies": {
    "gulp": "^3.8.11",
    "jquery": "^2.1.4",
    "underscore": "^1.8.3"
  },
  "devDependencies": {
    "browserify": "^10.2.3",
    "gulp-autoprefixer": "^2.3.0",
    "gulp-changed": "^1.2.1",
    "gulp-connect": "^2.2.0",
    "gulp-imagemin": "^2.2.1",
    "gulp-plumber": "^1.0.1",
    "gulp-sass": "^2.0.1",
    "gulp-uglify": "^1.2.0",
    "vinyl-source-stream": "^1.1.0"
  },```

enjoy!
