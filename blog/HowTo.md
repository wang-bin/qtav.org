- Write markdown
- Export html by Typora, with Night theme
- Add these lines at the beginning of <header>
```html
    <link rel="stylesheet" href="../stylesheets/styles.css">
    <link rel="stylesheet" href="../stylesheets/pygment_trac.css">
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.css">
    <script src="../javascripts/jquery-1.9.1.min.js"></script>
    <script src="../javascripts/respond.js"></script>
    <script src="../javascripts/footer.js"></script>
```
- Add in the beginning of <body>
```html
    <script src="../javascripts/header.js"></script>
```
- Add in the end of <body>
```html
  <div>
    <script >Footer.create("New SDK", "../");</script>
  </div>
  </section>
  </div>

  <div id="disqus_thread"></div>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>

```