// Ajax Username to Userid
$(function() {
    $("body").on("click", "#fb_get", function() {
        username = $("#fb_username").val();
        $.ajax({
            url: "profile_id.php?username=" + username,
            type: "get",
            dataType: "json",
            success: function(result) {
                if (result['id']) {
                    $(".fb_user_id").val(result['id']);
                } else {
                    alert("No Facebook ID found. Maybe this user is private?");
                }
            },
            error: function() {}
        });

    });


});

//Personal Search

function postscommented(number) {
  window.open('https://www.facebook.com/search/' + number + '/stories-commented', 'fb2window');
}

function photosliked(number) {
  window.open('https://www.facebook.com/search/' + number + '/photos-liked', 'fb2window');
}

function photosof(number) {
  window.open('https://www.facebook.com/search/' + number + '/photos-of', 'fb2window');
}

function photostagged(number) {
  window.open('https://www.facebook.com/search/' + number + '/photos-tagged', 'fb2window');
}

function photoscommented(number) {
  window.open('https://www.facebook.com/search/' + number + '/photos-commented', 'fb2window');
}

function photosfriendsuploaded(number) {
  window.open('https://www.facebook.com/search/' + number + '/friends/photos-uploaded', 'fb2window');
}


// Search postings

function updatelink(s) {
  document.getElementById("link1").href = "https://www.facebook.com/search/str/" + s.value + "/stories-keyword/stories-live";
  document.getElementById("link2").href = "https://www.facebook.com/search/str/" + s.value + "/stories-keyword/";
  document.getElementById("txt1").innerHTML = s.value;
  document.getElementById("txt2").innerHTML = s.value;
  return;
}

// Location search

var rowcount = 1;

function AndFunction(id){
  document.getElementById("AndButton").remove();
  document.getElementById("andlable"+id).innerHTML = "COMBINE WITH ";

  var id2 = id+1;
  var div = document.createElement('div');

  document.getElementById('inputrows').appendChild(div);

  div.id = 'inputrow'+id;

  document.getElementById("inputrow"+id).innerHTML = "<select id='Selector"+id+"'>" +
    "<option value='pages-named/visitors'>Visited</option>" +
    "</select>" +
    "<input type='text' id='item"+id+"'>" +
    "<input type='submit' id='AndButton' value='AND' onclick='AndFunction("+id2+")'>"+
    "<span id='andlable"+id2+"'></span>";
   rowcount = id;
}

function OpenFacebook(id){
  var myurl = "https://www.facebook.com/search";

  for(i=1;i<rowcount+1;i++){
    var MySelector = document.getElementById("Selector"+i).value;
    var MyItem = document.getElementById("item"+i).value;

    if(MyItem.length>0){
      myurl = myurl+"/str/"+encodeURIComponent(MyItem)+"/"+MySelector+"/intersect";
    }
  }

  if(myurl.length>31){
    window.open(myurl);
  }
}

function allplaces (number) {
  window.open('https://www.facebook.com/search/' + number + '/places-visited', 'fb1window');
}

function barsvisited(number) {
  window.open('https://www.facebook.com/search/' + number + '/places-visited/110290705711626/places/intersect', 'fb1window');
}

function cafe(number) {
  window.open('https://www.facebook.com/search/' + number + '/places-visited/197871390225897/places/intersect', 'fb1window');
}

function bookstores(number) {
  window.open('https://www.facebook.com/search/' + number + '/places-visited/134647819950016/places/intersect', 'fb1window');
}

function gym(number) {
  window.open('https://www.facebook.com/search/' + number + '/places-visited/184405378265823/places/intersect', 'fb1window');
}

function hotels(number) {
  window.open('https://www.facebook.com/search/' + number + '/places-visited/164243073639257/places/intersect', 'fb1window');
}

function cinema(number) {
  window.open('https://www.facebook.com/search/' + number + '/places-visited/192511100766680/places/intersect', 'fb1window');
}

function restaurants(number) {
  window.open('https://www.facebook.com/search/' + number + '/places-visited/273819889375819/places/intersect', 'fb1window');
}

//Navigation tabs
$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

//header navigation
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});
