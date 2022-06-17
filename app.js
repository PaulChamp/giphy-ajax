console.log("Let's get this party started!");
const $gifBlock = $("#gifblock");
const $searchTerm = $("#searchTerm");

function addGif(res) {
    let results = res.data.length;
    if(results) {
        let randomNum = Math.floor(Math.random() * results);
        let $newColm = $("<div>", { class: "column"});
        let $newGif = $("<img>", { src: res.data[randomNum]
        .images.original.url, class:"w-100"});
        $newColm.append($newGif);
        $gifBlock.append($newColm);
    }
}

$("form").on("submit", async function(e){
    e.preventDefault();

    let search = $searchTerm.val();
    $searchTerm.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: search,
            apiKey: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

$("#removebtn").on("click", function(){
    // console.log("remove");
    $gifBlock.empty();
})