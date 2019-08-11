var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps   = require('gulp-sourcemaps');
 var removeEmptyLines = require('gulp-remove-empty-lines');
var    cssbeautify = require('gulp-cssbeautify');

var clean = require('gulp-clean');


function clean_style()
{
    return gulp.src('public_html/css', {read: false,allowEmpty:true})
        .pipe(clean());
} 
 
function sass_style()
{
    return gulp.src('sass/mystyle.scss')
        .pipe( sourcemaps.write())
        .pipe(sass().on('error', function (err){
            notify().write(err);
            this.emit('end');
        }))
       .pipe(gulp.dest('public_html/css/'))
       .pipe(browserSync.stream());
} 
 
function handleFile(file, encoding, callback)
{

         callback(null, file);
         if (!file.w3cjs.success)
         throw new Error('HTML validation error(s) found');
}
    
 

function css_style()
{
    
    return gulp.src('css/mystyle.css')
     .pipe(removeEmptyLines())
       .pipe(cssbeautify({
            indent: '  ',
            openbrace: 'separate-line',
            autosemicolon: true
         
        }))
        
        

        .pipe(gulp.dest('public_html/css/'));
 
}

function reload()
{
     return browserSync.reload();
}
 

function watch()
{

 
browserSync.init({
    files       : [ './public_html/**' ],
    watchEvents : [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ],
     proxy : 'http://localhost:8383/CSS-Study/index.html'
});
// Proxy is the address of the server by netbeans
//css_style();



 
/*
 browserSync.init({
    injectChanges: true,
 proxy : 'localhost:3000'
});
*/
 
   //  gulp.watch("./sass/mystyle.scss", gulp.series(  sass_style));
   
   //  gulp.watch("./css/mystyle.css", css_style);
   
  
   
}



 
exports.watch = watch;
exports.sass_style = sass_style;
exports.css_style = css_style;
exports.reload= reload;
exports.clean_style= clean_style;