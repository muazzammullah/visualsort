/////////////////////////////////////////////////////
async function bubblesort(a){
    document.getElementById("key2").style.display="inline-block";   
    document.getElementById("key1").style.display="none";   
    var element_last_sorted=a.length-1;
    for (i = 0; i<a.length; i++) {
        for ( j = 0 ; j < a.length-1-i; j++) {
                draw(a);
                document.getElementById('bar_'+j).style.backgroundColor = 'lightgrey';
                document.getElementById('bar_'+(j+1)).style.backgroundColor = 'lightgrey';
                if(a[j]>a[j+1]){
                    //swop
                    temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp
                }
                await(sleep(80));
                draw(a);
        }
        //element_last_sorted=a.length-1-i;
        console.log(element_last_sorted);
    }
    alert("Sorting Complete");
    document.getElementById("startbutton").disabled=false;   
}
////////////////////////////////////////////////////////////

async function selsort(a){
    document.getElementById("key1").style.display="inline-block";
    document.getElementById("key2").style.display="none";     
    for(j=0;j<a.length;j++){
        //sleep(200);
        //set min index to current j
        document.getElementById('bar_'+j).style.backgroundColor = 'grey';
        var currentmin=j;
        for(i=j+1;i<a.length;i++){
            document.getElementById('bar_'+i).style.backgroundColor = 'lightgrey';
            //if the number in the array at index i is less than the current minimum
            if(a[i]<a[currentmin]){
                //set the currentmin indice cache as the current number in iteration
                currentmin=i;
                document.getElementById('bar_'+currentmin).style.color = '#f1c40f';
                for (x = j ; x <currentmin; x++) {
                  document.getElementById('bar_'+x).style.color = 'red';
                }
                
            }
            await(sleep(40));
            document.getElementById('bar_'+i).style.backgroundColor = '#34495e';
        }
        //keep current minimum as placeholder variable               
        place=a[j];
        //set new minimum in array in place of previous minimum
        a[j]=a[currentmin];
        //keep prev minimum in place of current/new minimum
        a[currentmin]=place;
        await(sleep(40));
        draw(a);
        document.getElementById('bar_'+j).style.backgroundColor = '#34495e';
    }
    alert("Sorting Complete");
    document.getElementById("startbutton").disabled=false;   
}
///////////////////////////////////////////////////////////////////////////////////////
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

function draw(arr_to_sort){
    document.getElementById("root").innerHTML="";
    for(y=0;y<arr_to_sort.length;y++){
        document.getElementById("root").innerHTML+="<div id='bar_"+y+"' class='bar' style='height:"+(4 *arr_to_sort[y])+"px;width:"+(100/arr_to_sort.length).toString()+"%'>"+arr_to_sort[y]+"</div>"
    }
}

function startvisualiser(num_elements){
    var arr_to_sort=[];
    for(i=0;i<num_elements;i++){
       arr_to_sort.push(Math.floor(Math.random() * 100) + 1);
    }
    var length_of_array=arr_to_sort.length;
    draw(arr_to_sort);
    //start if statements here for when more algorithms are added
    
    if(document.getElementById("algo").value=="selection"){
        selsort(arr_to_sort);
    }
    else if(document.getElementById("algo").value=="bubble"){
         bubblesort(arr_to_sort);
    }
   }


//selsort([1,5,4,3,2]);
function start(){
    if(document.getElementById("num_elements").value>20){
        alert("you may encounter issues when handling more than 20 elements,please use 20 or less elements");
    }
    else{
        startvisualiser(document.getElementById("num_elements").value); 
        document.getElementById("startbutton").disabled=true;   
    }
     
}