function handleRedirection() {
    var path = window.location.pathname;
    var occasionid = path.substring(1);

    if (occasionid.length > 0) {
        var customURL = 'gotboard://' + occasionid;
        window.location.href = customURL;
    } else {
        window.location.href = 'index.html';
    }
}

function transitionContent() {
    var logo = document.getElementById('logo');
    var mainContent = document.querySelector('.container');
    var footer = document.querySelector('footer');

    logo.style.opacity = '0';
    logo.style.visibility = 'hidden';

    setTimeout(function() {
        mainContent.style.display = 'flex';
        mainContent.style.opacity = '1';
        mainContent.style.visibility = 'visible';

        footer.style.display = 'block';
        footer.style.opacity = '1';
        footer.style.visibility = 'visible';

        document.getElementById('icon').style.display = 'block';
        document.getElementById('logo-text').style.display = 'block';
        document.querySelector('.button').style.display = 'block';
    }, 1900);
}

window.onload = function() {
    handleRedirection();
    transitionContent(); 
};
