$(".eleClick").on("click", seeLinks);
$(document).ready(runToolTip);

function runToolTip()
{
    $('[data-toggle="tooltip"]').tooltip();   
};


function seeLinks ()
{
    $(".moreInfoDetail").remove();

    var appID = $(this).attr("id");
    var appLink = $(this).attr("data-app");
    var gitLink = $(this).attr("data-git");

    var appInsert = "<div class = 'moreInfoDetail'><a class = 'font-green' href ='" + appLink + "'>Live Application</a></div>"
    var gitInsert = "<div class = 'moreInfoDetail'><a class = 'font-green' href ='" + gitLink + "'>GitHub Source</a></div>"

    $(this).append(appInsert);
    $(this).append(gitInsert);

}