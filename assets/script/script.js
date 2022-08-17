async function fetchQuotes() {
    try {
        const response = await fetch("https://thatsthespir.it/api");
        const quote = await response.json();
        document.getElementById("quote-text").innerHTML = quote.quote;
        document.getElementById("author").innerHTML = quote.author;
        let photo = document.getElementById("photo")
        console.log(quote.photo);
        quote.photo == ""? photo.src = "assets/image/user.png": photo.src = quote.photo
        document.getElementById("photo").alt = quote.author;
    } catch (error) {
        alert("Error", error);
    }
}
document.getElementById("nquote").addEventListener("click", () => {
    fetchQuotes();
});
fetchQuotes();
