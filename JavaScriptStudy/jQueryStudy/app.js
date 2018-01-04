/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
// var featured;
//
// featured = $(".featured");
// featured.toggleClass("featured");

/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

article2 = $(".featured");
article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');

/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $(".nav-list");
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href', '#1');

/*
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item");
articleItems.css('font-size', '20px');

/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/

// $( "#input" )
//   .keyup(function() {
//     var value = $("#input").val();
//     $(".articles").children('h1').text(value);
//   })
//   .keyup();


$('#input').on('change', function() {
    var val, h1;
    val = $("#input").val();
    h1 = $(".articles").children('h1');
    h1.text(val);

});

/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems, ul;

articleItems = $(".articles-item");
ul = articleItems.find('ul');
ul.remove();

// function numberAdder() {
//     var text, number;
//     text = $(this).text;
//     number = text.length;
//     $(this).text(text + " " + number);
// }
//
// $("p").each(numberAdder);
