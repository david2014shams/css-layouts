var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(["./*.html", "./css/*.css"]).on('change', browserSync.reload)
});

// gulp.task('default', ['browser-sync'], function() {
//     console.log('Gulp running with browser-sync');
//     gulp.lastRun('browser-sync');
// })