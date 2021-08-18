const containerMaster = document.querySelector("#root");
const input = document.querySelector(".input-text");
const containerForm = document.querySelector("#container-form")

containerForm.addEventListener("submit", (e) => {
	e.preventDefault();

	async function getUserData(user) {
		const response = await fetch (`https://api.github.com/users/${user}`).then(
			(res) => res.json()
		);

		const image = document.createElement("img");
		image.src = response.avatar_url;

		image.style.width = "200px";
		image.style.borderRadius = "20px 20px 20px 20px";

		containerMaster.appendChild(image);
		const name = document.createElement("p");
		name.innerText = response.name;
		name.style.fontSize = "20px";
		containerMaster.appendChild(name);

		const followers = document.createElement("h2");
		followers.innerText = `Seguidores: ${response.followers}`;
		containerMaster.appendChild(followers);

		const following = document.createElement("h2");
		following.innerText = `Seguindo: ${response.following}`;
		containerMaster.appendChild(following);

		input.value = "";

	}

	getUserData(input.value);

})