// Bài tập 3

/**
 * Khối 1:
 * Khởi tạo vòng lặp kết hợp điều kiện vòng lặp ở dưới. 
 * Khối 2:
 * Sum là tổng giá trị vòng lặp của i đến khi Sum > 10000 sữ kết thức vòng lặp xuất ra giá trị i cuối  ra ta được kết quả mong muốn. Viết cho hai vòng lặp while và for
 */

/**
 * Vòng lặp while
 function numberMin(){
     var Sum = 0;
     var i = 1;
     while (Sum < 10000){
         i++
         Sum += i;
     }
     document.getElementById('txtResult_Bt3').innerHTML = "Số nguyên dương nhỏ nhất: " + i
 }
 * Ở vòng lặp while vì biến i++ (i+1) được thực hiện trước lệnh Sum so sánh nên ta có giá trị i chính bằng giá trị của số lớn nhất thõa mãn điều kiện của đề bài. Nếu đặt i++ ở dưới Sum thì lúc xuất lệnh thì sẽ -1 (giải thích ở bên dưới)
 */

//  Vòng lặp for
function numberMin(){
    var Sum = 0;
    
    for (var i = 1; Sum < 10000; i++){
        Sum += i;
    }
    // Ở vòng lặp for sau khi giá trị biến Sum cuối cùng thoả mản điều kiền thì lúc đó biến i được cộng thêm một đơn vị để tiếp tục so sánh, do đó khi suất giá trị phải trừ i 1 đơn vị
    document.getElementById('txtResult_Bt3').innerHTML = "Số nguyên dương nhỏ nhất: " + (i - 1);
}


