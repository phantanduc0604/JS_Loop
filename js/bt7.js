// Bài tập 7

/**
 * Khối 1: Input 
 * x ( số x được nhập vào từ khách hàng )
 * Khối 2: Các bước xử lý
 * B1 kiếm thẻ html và lấy giá trị
 * B2 Xét các vòng lặp 
 * - Vòng lặp thứ nhất : vì số nguyên tố là số tự nhiên lớn hơn 1 nên khởi tạo vòng lặp  có giá trị bắt đầu từ số 2 đến x ( vòng lặp này để chạy giá trị từ 2 tới n)
 * - Vòng lặp thứ 2 để kiểm tra 1 giá trị  có phải là số nguyên tố hay không (giá trị này sẽ chạy từ 2 đến x). 
 * Th1: nếu không phải số nguyên tố thì cho biến check = 1
 * Th2: nếu nếu là số nguyên tố cho biến check = 0
 * - Out vòng lặp tiếp tục xét check === 0 ứng với số nguyên tố thì cho nối chuỗi vào content
 * Hiển thị UI
 * Khối 3 Output
 * Cho chuỗi chưa các số nguyên tố từ 2 đến n
 * 
 */
function soNguyenTo(){
    var x = document.getElementById('inputNum7').value;
    var content = "";
    var check = 0;
    // vòng lặp n (khởi tạo từ 2 ) đến x
    for (var n = 2; n <= x; n++ ){
        
        // vòng lặp kiểm tra n có phải số nguyên tố
        for (var i = 2; i <= n/2; i++){
            if(n % i === 0){
                check = 1
                break;
            }else{
                check = 0
            }
        }
        if(check === 0){
            content += " " + n;
        }
    }
    document.getElementById("txtResult_Bt7").innerHTML = content
}
