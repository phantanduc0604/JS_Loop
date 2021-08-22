// Bài tập 4

/**
 * Khối 1 : Input
 * Khởi tạo biến  x và biến n
 * 
 * Khối 2 :
 * B1: Tìm thẻ html và lấy giá trị
 * B2: Khởi tạo vòng lặp và thiết lập công thức
 * sum += x ** i
 * Vòng lặp sẽ chạy giá trị từ 1 tới n. Khi chạy tới giá trị nào thì ta có giá trị sum(mới) = sum (cũ của biến i trước) + sum (hiện tại của biến i hiện tại) 
 * Sau khi out vòng lặp ta được giá trị sum bằng tổng sum của vòng lặp
 * B3 Hiển thị UI
 * Khối 3  : Output
 * Xuất ra giá trị sum
 */


/**
 function sumLT(){
     var x = parseInt(document.getElementById('inputX').value);
     var n = parseInt(document.getElementById('inputN').value);
     var sum = 0;
     var i = 1;
     while(i <= n){
         sum += x ** i
         i++
     }
     document.getElementById('txtResult_Bt4').innerHTML = "Tổng: " + sum
 }
 * 
 */

// Vòng lặp for

function sumLT(){
    var x = parseInt(document.getElementById('inputX').value);
    var n = parseInt(document.getElementById('inputN').value);
    var sum = 0;
    var i = 1;
    for(var i = 1; i <= n; i++){
        sum += x ** i
     
    }
    document.getElementById('txtResult_Bt4').innerHTML = "Tổng: " + sum
}
