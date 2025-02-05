// Example content array, easy to manage and update
const links = [
    { title: "First Post", url: "#" },
    { title: "Another Article", url: "#" },
    { title: "Cool Stuff I Found", url: "#" },
];

const contentDiv = document.getElementById("content");

links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.title;
    contentDiv.appendChild(a);
});
