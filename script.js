window.onload = function(){

let scrollpos = window.scrollY
const lines = document.getElementsByClassName("lineTrigger")
const startScroll = document.getElementById("title")
const scrollHeight = startScroll.offsetHeight
const house = document.getElementById("houseLine")

function add_class_on_scroll(){
	var i;
	for (i = 0; i < lines.length; i++){
	lines[i].classList.add("line")
	}
};
function remove_class_on_scroll(){
	var i;
	for(i = 0; i < lines.length; i++){
		lines[i].classList.remove("line")
	}
}
function class_on_scroll(){
	house.classList.add("fade")
}	


window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= scrollHeight) {
	  add_class_on_scroll() 
	  class_on_scroll()
  }
  else { 
	  remove_class_on_scroll() 
  }

  console.log(scrollpos)
})
}