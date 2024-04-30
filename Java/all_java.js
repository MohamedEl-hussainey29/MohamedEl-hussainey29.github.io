// home
function showPopup_home() {
    alert("Thank You for Your Recommendation");
}

function hide_show_home() {
var element = document.getElementById("form_home");
if (element.style.display === "none") {
element.style.display = "block";
} else {
element.style.display = "none";
}
}
//////////////////////////////////////////////////////////////////////////
//shawshank
$(document).ready(function() {
  $('#submitReview').click(function() {
      var review = $('#reviewInput').val();

      if (review !== '') {
          var reviewDiv = $('<div class="new-review"></div>');

          reviewDiv.text(review);

          $('#reviewsContainer').append(reviewDiv);

          $('#reviewInput').val('');
      }
  });
});

///////////////////////////////////////////////////////////////////////////
//schindler's_list
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  
  function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
////////////////////////////////////////////////////////////////////////////
// fight_club
function fight_club() {
    var paragraph = document.getElementById('list_fight');
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
    else {
        paragraph.style.display = "none";
    }
}
//////////////////////////////////////////////////////////////////////
// forrest_gump
function forrest_gump() {
    var paragraph = document.getElementById('para1_forrest');
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
    else {
        paragraph.style.display = "none";
    }
}
/////////////////////////////////////////////////////////////////////////
// fellowship
function followship() {
    var paragraph = document.getElementById('list_followship');
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
    else {
        paragraph.style.display = "none";
    }
}
/////////////////////////////////////////////////////////////////////////////
//pulp_fiction//inception
document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("pf-audio-1");
    var video = document.getElementById("pf-video-1");


    audio.volume = 0.20;


    video.addEventListener("play", function () {
        audio.volume = 0;
    });


    video.addEventListener("pause", function () {
        audio.volume = 0.2;
    });

    video.addEventListener("ended", function () {
        audio.volume = 0.2;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("incep-audio-1");
    var video = document.getElementById("incep-video-1");


    audio.volume = 0.25;


    video.addEventListener("play", function () {
        audio.volume = 0;
    });


    video.addEventListener("pause", function () {
        audio.volume = 0.25;
    });

    video.addEventListener("ended", function () {
        audio.volume = 0.25;
    });
});

function toggleDetails1() {
    var detailsElement = document.getElementById("incep-MoreDetails");
    if (detailsElement.style.display === "none") {
        detailsElement.style.display = "block";
    } else {
        detailsElement.style.display = "none";
    }
}

function toggleDetails2() {
    var detailsElement = document.getElementById("pf-MoreDetails");
    if (detailsElement.style.display === "none") {
        detailsElement.style.display = "block";
    } else {
        detailsElement.style.display = "none";
    }
}
//////////////////////////////////////////////////////////////////////////////////
//taxi_driver//return_of_king
function toggleParagraph1() {
    var paragraph = document.getElementById("Deniro");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
  function toggleParagraph2() {
    var paragraph = document.getElementById("Foster");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
  function toggleParagraph3() {
    var paragraph = document.getElementById("Shepherd");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
  function toggleParagraph4() {
    var paragraph = document.getElementById("Brooks");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
  function toggleParagraph5() {
    var paragraph = document.getElementById("Wood");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
  function toggleParagraph6() {
    var paragraph = document.getElementById("Mortensen");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
  function toggleParagraph7() {
    var paragraph = document.getElementById("Bloom");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
  function toggleParagraph8() {
    var paragraph = document.getElementById("McKellen");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }
  /////////////////////////////////////////////////////////////////////////
  // dune2
  function moredetails() {
    var paragraph = document.getElementById("dunep2id");
    paragraph.textContent = "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee."
    alert("Spoiler Alert")
  }