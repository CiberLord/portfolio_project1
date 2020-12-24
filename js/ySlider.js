//подключить jQuery перед тем как запускать этот скрипт!
// и подключить slider-config.css

(function () {

    let Slider = {};
    Slider._size = 0;
    Slider._index = 0;

    Slider.createSlider = function (slid) {
        let slider = $(slid.sliderName).addClass("y-slider");//поиск и создание слайдера
        let items = slider.find(slid.sliderItem);
        let h = items.css("height");
        items.addClass("y-slider-item");//поиск и создание слайдов
        let inner = $('<div class="y-slider-inner"></div>');//создание внутреннго контейнера для слайдов  
        let leftArrow = $('<div class="' + slid.leftArrow + '"></div>');//создание кнопки в лево
        let rightArrow = $('<div class="' + slid.rightArrow + '"></div>');//создание кнопки в право
        
        
        items.appendTo(inner);
        slider.append(inner);
        slider.css("height",h);
        slider.append(leftArrow);
        slider.append(rightArrow);
        Slider._itemWidth=parseFloat(items.css("width"));

        items.each(function (i, elem) {
            Slider._size = i;
        })
        Slider._size++;
        //активация кнопок
        leftArrow.on("click", function (event) {
            if (Slider._index > 0) {
                inner.css("left", parseFloat(inner.css("left")) + Slider._itemWidth + "px");
                Slider._index--;
            }
        });
        rightArrow.on("click", function (event) {
            if (Slider._index < Slider._size-1) {
                inner.css("left", parseFloat(inner.css("left")) - Slider._itemWidth + "px");
                Slider._index++;
            }
        });
    }

    window.ySlider = Slider;
    window.Ys = Slider;
})();






