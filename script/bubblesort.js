

//ascending order
async function bubble_sort(){
  var n = array_length;//defined in script.js
  var change = 1;
  while (change !== 0) {
    change=0;
    for (var i = 0; i < n-1; i++) {
      index_i=i;
      index_j=i+1;
      await sleep(200-sleep_time);
      print_array(current_array);
      index_j=-1;
      index_i=i+1;
      await sleep(200-sleep_time);
      print_array(current_array);
      //console.log(current_array[i]);
      if (current_array[i]>current_array[i+1]) {
        let x= current_array[i];
        current_array[i]=current_array[i+1];
        current_array[i+1]=x;
        change=i+1;
      }
    }
    n=change;
  }
  index_i=-1;
  print_array(current_array);
}

bubble.addEventListener('click', bubble_sort);
