async function fetchQuotes() {
    try {
        const response = await fetch("https://thatsthespir.it/api");
        const quote = await response.json();
        let background = await getBackground();
        document.getElementById("content").style.display = "flex";
        document.getElementById("nquote").style.display = "block";
        document.getElementById("loader").style.display = "none";
        document.body.style.backgroundImage = `url('${background}')`;
        document.getElementById("quote-text").innerHTML = quote.quote;
        document.getElementById("author").innerHTML = quote.author;
        let photo = document.getElementById("photo");
        quote.photo == ""
            ? (photo.src = "assets/image/user.png")
            : (photo.src = quote.photo);
        document.getElementById("photo").alt = quote.author;
    } catch (error) {
        console.log(error);
        alert("Error", error);
    }
}

async function getBackground() {
    try {
        const background = await fetch(
            "https://picsum.photos/1800/1600?random=1"
        );
        return background.url;
    } catch (error) {
        console.log(error);
    }
}
document.getElementById("nquote").addEventListener("click", () => {
    document.getElementById("content").style.display = "none";
    document.getElementById("nquote").style.display = "none";
    document.getElementById("loader").style.display = "block";
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = "";
    setTimeout(() => {
        fetchQuotes();
    }, 4000);
});
setTimeout(() => {
    fetchQuotes();
}, 4000);
