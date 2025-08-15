let joke = document.querySelector("h2");
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
  let jk = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  });
    let r = await jk.json();
    joke.innerText = `${r.joke}`;
})

