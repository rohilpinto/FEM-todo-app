const lightBtn = document.getElementById("light-button");
const toggleBtn = document.getElementById("toggle-theme");

const body = document.body;

// events


 

toggleBtn.onclick = () => {

if(body.className.includes('light')) {
	body.classList.remove('light')
	body.classList.add('dark')
	// toggleBtn.innerText = "Light"
	 
} else {
	
	body.classList.remove('dark')

	body.classList.add('light')
	// toggleBtn.innerText = "Dark"
}

};
