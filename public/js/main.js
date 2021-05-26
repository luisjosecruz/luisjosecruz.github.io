const scrollMenu = x => {
	let tag = $("a[name='"+x+"']");
	$('html,body').animate({scrollTop: tag.offset().top},'slow');
}

$(document).ready(() => {
    let btnMenuMb = $(".btn-menu-mb");
    let menu = $(".menu");
    let goup = $("#goup");
    let gotop = $("button[go='#top']");
    let goPortfolio = $("a[href='#portafolio']");
    let goAbout = $("a[href='#about']");
    let goContact = $("a[href='#contact']");

    btnMenuMb.click(() => {
        menu.toggleClass("active");
        btnMenuMb.toggleClass("active");
    });

    $(window).scroll(() => {
        if ($(window).scrollTop() > 300) goup.show();
        else goup.fadeOut();
    });

    //gotop.click(() => $("html, body").animate({scrollTop : 0}, 500));
/*
    goPortfolio.click(() => {
        scrollMenu("portafolio");
        menu.toggleClass("active");
        btnMenuMb.removeClass("active");
    });
    goAbout.click(() => {
        scrollMenu("about");
        menu.toggleClass("active");
        btnMenuMb.removeClass("active");
    });
    goContact.click(() => {
        scrollMenu("contact");
        menu.toggleClass("active");
        btnMenuMb.removeClass("active");
    });
*/
});