
      function quicksort() {
        const input = document.getElementById("input").value;
        //using input.split(",") to split and create array "Number" with .map
        const arr = input.split(",").map(Number);
        //output is set and used in function printout(arr) to show multiple steps
        const output = document.getElementById("output");
        //using innerHTML to clear input
        output.innerHTML = "";
        //defining a counter c 
        var c = 1;

        //calling quick sort helper that needs (arr, left, right, counter)
        QShelper(arr, 0, arr.length - 1, c);
        console.log(arr);
        ThirdL(arr);
      }

      //helper function b/c arr is not defined before quicksort function
      function QShelper(arr, left, right, counter) {
        if (left < right) {
          //PI = pivot index (basically where we start the sort from)
          const PI = partition(arr, left, right);
          //calling function 
          printout(arr, counter);

          QShelper(arr, left, PI - 1, counter + 1); //before pivot index
          QShelper(arr, PI + 1, right, counter + 1); //after pivot index
        }
      }

//from geeks for geeks pseudo code
//"function takes last element as pivot, places pviot element at its correct position in
//array, and places all smaller to left of pivot and all greater elements to right of pivot

      function partition(arr, left, right) {
        const pivot = arr[right];
        //pi = pivot index
        let PI = left;

        for (let i = left; i < right; i++) {
        //going through array to move elements smaller than pivot
          if (arr[i] < pivot) {
            swap(arr, i, PI);
            PI++;
          }
        }

        swap(arr, right, PI);
        return PI;
      }

      function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }

      function printout(arr, counter) {
        const output = document.getElementById("output");
        const iteration = document.createElement("p");
        iteration.innerText = `Step ${counter}: ${arr.toString()}`;
        output.appendChild(iteration);
      }
      
      function ThirdL(arr) {
      
      const length = arr.length;
      if (length >= 3) {
      	const Third = document.getElementById("Third");
        third.innerHTML = "Third largest is " + arr[length - 3];
      }
      else {
      	third.innerHTML = "array needs to have atleast 3 elements";
        }
      }
      
