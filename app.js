const profPic = document.querySelector("#profile-pic");
let angle = 0;



profilePic.addEventLister('mouseenter', () => {
    angle += 90;
    profPic.css('transform', 'rotate(' + angle + 'deg)');
});