const containerRoot = document.querySelector("#root");

async function getUserData() {
	const response = await fetch("https://reqres.in/api/users?page=2").then(
		(res) => res.json()

		);

return response.data;	
}

async function manipulationUser(){
	const getUser = await getUserData();
	const user = getUser.map ((i) => {
		console.log(i);
		const email = document.createElement("p");
		email.innerText = i.email;
		containerRoot.appendChild(email);

		const images = document.createElement("img");
		images.src = i.avatar;
		containerRoot.appendChild(images);
	})
	return user;
}

manipulationUser();







