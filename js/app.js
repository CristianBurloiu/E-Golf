// document.getElementById('myVideo').pause();


//setting on click listiner on the design part
$("#interior-btn").click(function () {
    document.getElementById('design-image').src = './images/car7.webp';
});

$("#exterior-btn").click(function () {
    document.getElementById('design-image').src = './images/car5.webp';
});
$("#lights-btn").click(function () {
    document.getElementById('design-image').src = './images/lights.webp';
});
$("#wheels-btn").click(function () {
    document.getElementById('design-image').src = './images/wheels.webp';
});

$("#review-btn").click(function () {
    document.getElementById('review-image').src = './images/review.webp';
});
$("#honest-btn").click(function () {
    document.getElementById('review-image').src = './images/honest.webp';
});
$("#people-btn").click(function () {
    document.getElementById('review-image').src = './images/people.webp';
});



//set event listiner for the side navbar overlay

$("#nav-gallery").click(function () {
    document.getElementById('menu-overlay').classList.remove('open')
    location.replace('#gallery')
});
$("#nav-design").click(function () {
    document.getElementById('menu-overlay').classList.remove('open')
    location.replace('#design')
}); 

$("#nav-efficiency").click(function () {
    document.getElementById('menu-overlay').classList.remove('open')
    location.replace('#efficiency')
}); 

$("#nav-review").click(function () {
    document.getElementById('menu-overlay').classList.remove('open')
    location.replace('#review')
}); 

$("#nav-interest").click(function () {
    document.getElementById('menu-overlay').classList.remove('open')
    location.replace('#interest')
});
$("#nav-close").click(function () {
    document.getElementById('menu-overlay').classList.remove('open')

});


//event listener for the back to top button
$('#btn-back-to-top').click(function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})


//video pause and play functionality
$('#pause').on('click', function () {
    var state = document.getElementById('state');
    var vid = document.getElementById('myVideo')
    if (state.innerHTML != 'pause') {
        vid.pause();
        state.innerHTML = 'pause'
        $("#circle").attr("class", "play");
        $("#from_pause_to_play")[0].beginElement();
    } else {
        vid.play()
        state.innerHTML = 'play'
        $("#circle").attr("class", "");
        $("#from_play_to_pause")[0].beginElement();
    }
});

//close toggle button
$('#toggle-button').click(function () {
    console.log('clicked');
    document.getElementById('menu-overlay').classList.add('open')
})