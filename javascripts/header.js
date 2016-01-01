(function(window, undefined) {
  document.write('<div id="header"><nav>'
    + '<li class="fork"><a href="https://github.com/wang-bin/QtAV"><span class="fa fa-github"></span> Github</a></li>'
    + '<li class="fork"><a href="https://github.com/wang-bin/QtAV/wiki/_pages"><span class="fa fa-book"></span> Wiki</a></li>'
    + '<li class="fork"><a href="https://github.com/wang-bin/QtAV/issues"><span class="fa fa-bug"></span> Bug</a></li>'
    + '<li class="fork"><a href="http://qtav.org"><span class="fa fa-home"></span> Home</a></li>'
    + '<li class="downloads"><a href="http://www.qtav.org/install.html"><span class="fa fa-cloud-download"></span> <span data-l10n-id="Install">Install</span></a></li>'
    + '<li class="title" data-l10n-id="QtAV" style="font-size:18px;">QtAV</li>'
  + '</nav></div>');

})(window);


if (location.href.indexOf('/blog/') > 0) {
           
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    /*
    var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        
        s.src = '//qtav.disqus.com/embed.js';
        
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
}