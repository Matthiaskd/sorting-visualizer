
function get_middle(var arr){
  return Math.floor(array_length/2);
}

var middle =get_middle(current_array);


function swap(int i, int j){
    let temp=current_array[i];
    current_array[i]=current_array[j];
    current_array[j]=temp;
  }
}




//start of sorting the first, midlleth and last array indexes
if (current_array[0]>current_array[middle]) {
  swap(0,middle);
}
else if (current_array[middle]>current_array[array_length]) {
  swap(middle,array_length);
}
else if (current_array[0]>current_array[array_length]) {
  swap(0,array_length);
}
//end of sorting

function quick_sort(var arr, int low, int high){

  let pivot=arr[get_middle(arr)];
  swap(middle,array_length);
  partition();
  swap(middle,array_length);

}

function partition(var arr, int left, int right, int val){
  let left_index=left;
  let right_index=right;
  while (right_index>left_index) {
    while (arr[right_index]>val && right_index>=0) {
      right_index-=1;
    }
    while (arr[left_index]<val) {
      left_index+=1;
    }
  }


}
