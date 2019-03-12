console.log('connectd');

var cells = document.querySelectorAll("td");

var rb = document.querySelector('#rb');

var table = document.querySelector('table')

rb.addEventListener('click',function(){
	cur_markers = 0;
	for(var i=0;i<cells.length;i++){
		cells[i].textContent=''
		cells[i].style.color='black';
	}
})

var cur_player = 1;
var cur_marker = 'X';
var iswinner = false;
var cur_markers = 0;


function checkwinner(){
	// console.log('inside checkwinner');
	if((cells[0].textContent != '')&&(cells[0].textContent === cells[1].textContent) &&(cells[1].textContent === cells[2].textContent)){
		iswinner = true;
		cells[0].style.color = 'red';
		cells[1].style.color = 'red';
		cells[2].style.color = 'red';
			
	}
	if((cells[3].textContent != '')&&(cells[3].textContent === cells[4].textContent) &&(cells[4].textContent === cells[5].textContent)){
		iswinner = true;
		cells[3].style.color = 'red';
		cells[4].style.color = 'red';
		cells[5].style.color = 'red';
		
	}
	if((cells[6].textContent != '')&&(cells[6].textContent === cells[7].textContent) &&(cells[7].textContent === cells[8].textContent)){
		iswinner = true;
		cells[6].style.color = 'red';
		cells[7].style.color = 'red';
		cells[8].style.color = 'red';
		
	}

	if((cells[0].textContent != '')&&(cells[0].textContent === cells[3].textContent) &&(cells[3].textContent === cells[6].textContent)){
		iswinner = true;
		cells[0].style.color = 'red';
		cells[3].style.color = 'red';
		cells[6].style.color = 'red';
		
	}
	if((cells[1].textContent != '')&&(cells[1].textContent === cells[4].textContent) &&(cells[4].textContent === cells[7].textContent)){
		iswinner = true;
		cells[1].style.color = 'red';
		cells[4].style.color = 'red';
		cells[7].style.color = 'red';
		
	}
	if((cells[2].textContent != '')&&(cells[2].textContent === cells[5].textContent) &&(cells[5].textContent === cells[8].textContent)){
		iswinner = true;
		cells[2].style.color = 'red';
		cells[5].style.color = 'red';
		cells[8].style.color = 'red';
		
	}
	
	// Diagnols
	if((cells[0].textContent != '')&&(cells[0].textContent === cells[4].textContent) &&(cells[4].textContent === cells[8].textContent)){
		iswinner = true;
		cells[0].style.color = 'red';
		cells[4].style.color = 'red';
		cells[8].style.color = 'red';
		
	}
	if((cells[2].textContent != '')&&(cells[2].textContent === cells[4].textContent) &&(cells[4].textContent === cells[6].textContent)){
		cells[2].style.color = 'red';
		cells[4].style.color = 'red';
		cells[6].style.color = 'red';
		
		iswinner = true;
	}
			
	if(iswinner === true){
		alert("player " + cur_player + "is the winner");
	}
	else{
		console.log('no winner yet');
	}
}


function change_marker(){
	if(this.textContent === ''){
		cur_markers += 1;
		this.textContent = cur_marker;
		if(cur_marker === 'X'){
			cur_marker='0';
		}
		else cur_marker='X';
	}
	// console.log(cur_player);
	checkwinner();
	
	if(iswinner === true){
		setTimeout(function(){
		rb.click();
		iswinner = false;	
		},2000);
		
	}else if(cur_markers === 9){
		alert('Its a Draw !!!');
		setTimeout(function(){
		rb.click();
		},2000);
		
	}
	
	if(cur_player === 1){
		cur_player = 2;
	}else
	{cur_player=1;}
}

for (var i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click',change_marker);
}


