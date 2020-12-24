
function getVwFromPx(val) {
    return (100 / window.innerWidth) * val;
}

Ys.createSlider({
    sliderName: ".slider",
    sliderItem: ".slider-item",
    leftArrow: "left-arrow",
    rightArrow: "right-arrow"
});

(function () {

    //создание таба
    let s_tab = $('<div class="scroll-tab"></div>');
    $(".scroller").append(s_tab);
    s_tab.css("width", $(".tab-item1").css("width"));

    let current = $(".tab-item1").addClass("activ");
    let width = parseFloat(s_tab.css("width"));
    let posx = {
        t1: 0,
        t2: width,
        t3: 2 * width
    }
    console.log(posx);

    $(".tab-items div").on("selectstart", function () {
        return false;
    })

    $(".tab-items div").each(function (i, elem) {
        console.log(elem);
        $(elem).on("click", function (event) {
            current.removeClass("activ");
            $(this).addClass("activ");

            let width = parseFloat(s_tab.css("width"));
            let left = parseFloat(s_tab.css("left"));

            if ($(this).hasClass("tab-item1"))
                s_tab.css("left", posx.t1);
            if ($(this).hasClass("tab-item2"))
                s_tab.css("left", posx.t2);
            if ($(this).hasClass("tab-item3"))
                s_tab.css("left", posx.t3);
            s_tab.css("width", width + "px");
            current = $(this);
        });
    })

})();