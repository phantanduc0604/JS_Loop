// Bài tập 6

/**
 * Ý tưởng
 * Khởi tạo một biến content rỗng để chưa các div
 * tạo vòng lặp cho giá trị i chạy từ 1 đến 10 
 * Để check chẳn lẻ cho vòng lặp dùng điều kiện %2 === 0 ( nếu chia cho 2 có phần dư bằng 0 là số chẵn ngược lại là số lẽ)
 * Th1: Nếu là chẵn thì  content được thêm div chẵn có background màu đỏ vào
 * Th2 : Nếu là lẽ thì content được thêm div lẻ có background màu xanh vào
 * 
 * Phần css thì mình sẽ chỉnh bên css dùng class còn nếu k thì có thể style luôn vào thể div
 * Hiển thị UI
 * Xuất ra biến content chứa 10 thẻ div có màu xanh đỏ xen kẽ nhau
 */
function taoThe(){
    var content = "";
    for(var i = 1; i <= 10; i++){
        if (i %2 === 0){
            content += "<div class = bg-danger >Div Chẵn</div>";
        }else{
            content += "<div class = bg-info >Div Lẻ</div>";
        }
    }
    document.getElementById('txtResult_Bt6').innerHTML = content
}
