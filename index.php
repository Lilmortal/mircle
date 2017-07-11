<!-- This php file is needed to trick Heroku to deploy static content. 
Heroku will look for index.php, which then redirects you to index.html -->
<?php header( 'Location: /index.html' ) ;  ?>