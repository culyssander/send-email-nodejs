module.exports = {
    EMAIL_SUBJECT: 'Welcome to the Mike and Quitumba App',
    EMAIL_TEXT: 'Welcome to our application. To activate your profile you need to click on the link below or on the button.',
    EMAIL_HTML: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to our app</title>
        <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to our application. </h1>
            
            <p>To activate your profile you need to click on the link below or on the button.</p> <br>
            <button class="btn btn-primary">Active</button> <br> <br>
            <a href="facebook.com/culyssander">link</a>
            <br><br>
            <img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15921/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png" width="50%" >
            <br>
            <p>Thank you very much.</p>
            <a href="facebook.com/culyssander"> <i class="fab fa-facebook-square"></i> Facebook</a>
        </div>
    </body>
    </html>
    `
}