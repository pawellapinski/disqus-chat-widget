$(document).ready(function() {
// check if this is index.html
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        insertDisqusButton();
    }
});

function insertDisqusButton() {
    let disqusButton = `
        <div class="button-wrapper" id="disqus-button-wrapper" style="text-align: center; margin-top: 20px;">
            <button id="toggleDisqus" class="disqus-button bg-color-2" style="border-radius: 12px; width: 300px; height: 40px; margin:10px;">
                <strong>Chat Disqus</strong>
            </button>
        </div>
        <div id="disqus-container" style="display: none; margin: 20px auto; max-width: calc(0% + 1180px);">
            <div id="disqus_thread"></div>
        </div>
    `;

    $('body').append(disqusButton);

    $('#toggleDisqus').click(function() {
        $('#disqus-container').toggle();
        if ($('#disqus-container').is(':visible')) {
            loadDisqusWidget();
        }
    });
}

function loadDisqusWidget() {
    if (!window.disqusLoaded) {
        let d = document, s = d.createElement('script');
        s.src = 'https://radio-propagation.disqus.com/embed.js'; // !!! ACHTUNG !!! <-- if you want to change default
        // chat. Paste your disqus url here !!!
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        window.disqusLoaded = true;
    }
}
