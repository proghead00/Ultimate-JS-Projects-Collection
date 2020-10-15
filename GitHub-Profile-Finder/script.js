const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("proghead00");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);

    getRepos(username);
}

async function getRepos(username) {
    const resp = await fetch(APIURL + username + "/repos");
    const respData = await resp.json();

    addReposToCard(respData);
}

let createUserCard = (user) => {
    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />

            
            </div>
            <div class="user-info">

                <div class="det">
                <h1>${user.name}</h1>

      

           
                
                <a href="${`https://${user.blog}`}" target="_blank" >
                   <img class="redirect" src="/images.png" alt="redirect"
        
                   >
                </a>
               
          


                </div>
                <p>${user.bio}</p>

                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>

                <hr style="opacity: 0.6; ">
                <br>
                <h2 align="center"> GitHub Statistics </h2>

               <img src="https://github-readme-stats-mu-dusky.vercel.app/api?username=${user.login}&show_icons=true&count_private=true&include_all_commits=true" />

            
        </div>
    `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos");

    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10)
        .forEach((repo) => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");

            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});
