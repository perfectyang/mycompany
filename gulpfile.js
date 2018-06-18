var rename = require('gulp-rename')
var path = require('path')
var replace = require('gulp-replace')
var t = new Date().getTime()
 

function registerTask (taskName, config) {
    gulp.task(taskName, gulp.series(
      replaceJSVer,
      gulp.parallel(
        copyTemplate,
        copyDist
      )
    ))
  }
