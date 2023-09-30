// GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#jokes");
const jokeBtn = document.querySelector("#jokeBtn");

// const generateJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/JSON",
//     },
//   };

//   fetch("https://icanhazdadjoke.com/", setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       jokes.innerHTML = data.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// async and await method:

const generateJokes = async () => {
 try{
    const setHeader = {
        headers : {
            Accept: "application/JSON"
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', setHeader)
    const data = await res.json();
    jokes.innerHTML = data.joke

 }catch(err){
    console.log(`the error is ${err}`)
 }
}

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
