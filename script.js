//your JS code here. If required.
let imageContainer=document.getElementByClass('image-container')[0];
if(window.innerWidth>window.innerHeight){
	document.body.style.backgroundImage=`url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')`
}else{
	document.body.style.backgroundImage=`url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')`
}