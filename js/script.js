// بسم الله
$(() => {
    $(".nav-link").click(() => {
        $(".active").removeClass("active");  // إزالة الفئة 'active' من جميع العناصر
        $(this).addClass("active");       // إضافة الفئة 'active' للعنصر الذي تم النقر عليه
    });


    $(window).scroll(() => {
        if ($(window).scrollTop() > 150) {
            $('details#header--menu').removeAttr('open');
        }
    });


    $('#question details').click((e) => {
        const $this = $(e.currentTarget); 
        $('#question details').removeAttr('open');
        // console.log($this)
        // $(e.currentTarget)
        if ($this.attr('open')) {
            $this.removeAttr('open')
            console.log($this)
        }
        // if ($this.attr('open')) {
        //     $this.removeAttr('open'); 
        //     $('#question details').removeAttr('open');
        // } else {
        //     $('#question details').removeAttr('open');
        //     $this.addAttr('open'); 
        // }
    });
    
    
});
