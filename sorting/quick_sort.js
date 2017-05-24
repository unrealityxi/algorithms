// array -> void
// Takes array and mutates it into sorted array
// using "quick sort" algorithm

function quickSort(arr){

  function inner(arr, start, end){

    if (start < end){
      var partitionIndex = partition(arr, start, end);
      inner(arr, start, partitionIndex - 1);
      inner(arr, partitionIndex + 1, end );
    }
  }

  function partition(arr, start, end){
    let pivot = arr[end];
    let partitionIndex = start;

    for (let i = start; i < end; i++){
      if (arr[i] <= pivot){
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, partitionIndex, end);
    return partitionIndex;
  }

  function swap(arr, a, b){
    let temp = arr[a]; 
    arr[a] = arr[b]; 
    arr[b] = temp;
  }

  inner(arr, 0, arr.length - 1);

}

let arr = [4,15,3,26,34267,123,4,1];
quickSort(arr);

console.log(arr);