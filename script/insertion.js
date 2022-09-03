async function insert_sort(){
  for (var i = 1; i < array_length; i++) {
    index_i=i;
    await sleep(200-sleep_time);
    print_array(current_array);
    var current_value=current_array[i];
    var j=i-1;
    while (j>=0 && current_array[j]>current_value) {
      index_j=j;
      await sleep(200-sleep_time);
      print_array(current_array);
      current_array[j+1]=current_array[j];
      j--;
    }

    current_array[j+1]=current_value;
  }
  index_j=-1;
  index_i=-1;
  print_array(current_array);
}

insertion.addEventListener('click', insert_sort);
