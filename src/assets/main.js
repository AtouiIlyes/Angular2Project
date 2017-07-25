    $(document).ready(function () {
        $(".BG").click(function () {
            $("#demo").slideToggle('slow');
            if ($(".BG").val() == '-') {
                $(".BG").val('+');
            } else {
                $(".BG").val('-');
            }
        });
    });

        $(document).ready(function () {
            $(".ellipse").click(function () {
                $(".ellipse.active").removeClass("active");
                $(this).addClass("active");

            });
        });
