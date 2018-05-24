
var quotes = [
{
quote:" Tell me and I forget. Teach me and I remember. Involve me and I learn.",
author:"-Benjamin Franklin"
},

{
quote:"Being Awesome is Easy",
author:"-Rex Schrader"
},
{
quote:"Life is about making an impact, not making an income",
author:"-Kevin Kruse"
},
{
    quote: "Somebody Got to Hop!",
    author:"-Grandma Betty"
    },
    {
        quote: "All you need is love",
        author:"-Bree Aguilar"
        },
        {
            quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
            author:"-Jesus"
            },
            {
                quote:"Fall seven times and stand up eight",
                author:"-Japanese Proverb"
                },
                {
                    quote:" The most difficult thing is the decision to act, the rest is merely tenacity.",
                    author:"–Amelia Earhart"
                    },
                    {
                        quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
                        author:"-Dalai Lama"
                        },
                        {
                            quote: "You know you are on the road to success if you would do your job, and not be paid for it",
                            author:"-Oprah Winfrey"
                        },
                        {
                            quote: "I am thankful for all of those who said NO to me. Its because of them I’m doing it myself.",
                            author:" -Albert Einstein"
                        }


];

$("button").on("click", function(){
var r = Math.floor(Math.random()*quotes.length);
$("#quote").html(quotes[r].quote);
$("#author").html(quotes[r].author);
});










// $("h1").click(function(){
//     alert("Annoying Pop-Up");
// })

// $("button").click(function(){
//     console.log("Shows New Quote");
// })

// $("input").keypress(function (event){
// if(event.which === 13){
//     alert("you pressed enter");
// }
// });

// $("button").on("mouseenter",function(){
//    $(this).css("font-weight","bold");
// });

// $("button").on("mouseleave",function(){
//     $(this).css("font-weight","normal");
// });
// $("h1").on("click",function(){
//     $(this).fadeToggle(1000);});

// $("button").on("click", function(){
//     $("img").slideToggle(500);
// });
// $("button").on("click",function(){
//     $("h1").slideToggle(500);});