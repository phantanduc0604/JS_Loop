// Bài tập 2 

/**
 * Khối 1: 
 * Khởi tạo biến count để đếm các số chia hết cho 3 trong  dãy số nhở hơn 1000
 * Khối 2:
 * Tạo vòng lặp cho dãy số từ 0 đến nhỏ hơn 1000
 *  xét trường hợp nếu i (giá trị được chạy từ 0 đến < 1000) chia 3 lấy phần dư mà bằng  0 thì đó là số chia hết cho 3 biến count được +1. Lặp cho đến khí không thỏa mãn điều kiện vòng lặp ta thu được biến count là số đếm số chia hết cho 3 trong dãy từ  0 đến nhở hơn 1000
 * Khối 3:
 * Hiển thị UI
 */
// Vòng lặp while
/**
 function ChiaCho3(){
     var i = 0;
     var count = 0;
     while(i < 1000){
         if (i % 3 === 0){
             count += 1;
         }
         i++
     }
     document.getElementById('txtResult2').innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số"
 }
 * 
 */

//  Vòng lặp for

function ChiaCho3(){
    var count = 0;
    for(var i = 0; i < 1000; i++){
        if (i % 3 === 0){
            count += 1;
        }
        
    }
    document.getElementById('txtResult2').innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số"
}