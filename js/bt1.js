//Bài tập 1


/**
 * Khối 1:
 * Khởi tạo các biến soChan và soLe rỗng để chứa dãy sô chẵn lẻ từ 0 đến 100
 * 
 * Khối 2:
 * Tạo vòng lặp cho i chạy từ 0-100 và áp dụng cách chia 2 lấy phần dư để phân biệt số chẵn lẻ
 * Th1: i % 2 === 0 thì đó là số chẵn ==> soChan = soChan + i + ", "; 
 * Th2: ngược lại thì đó là số lẻ ==> soLe = soLe + i + ", "; 
 * i chính là giá trị được chạy từ 1 đến 100
 * 
 * Khối 3:
 * Hiển thị UI - Xuất giá trị counChan và CountLe
 */

/**
 function ChanLe (){
     var countChan = "";
     var countLe = "";
     var i = 0;
 
     while (i <= 100){
         if( i % 2 === 0){
             countChan = countChan + " " +i; 
         }else{
             countLe = countLe + " " +i;
         }
         i++
     }
     
 
     document.getElementById('txtResult1').innerHTML = "Số Chẵn: " + countChan + "<br>" + "Số lẻ: " + countLe;
 
 }
 * 
 */

// Vòng lặp for

function ChanLe (){
    var soChan = "";
    var soLe = "";
    
    for (var i = 0; i <= 100; i++){
        if( i % 2 === 0){
            soChan += i + ", "; 
        }else{
            soLe+= i + ", "; 
        }
        
    }
    
    document.getElementById('txtResult1').innerHTML = "Số Chẵn: " + soChan + "<br>" + "<br>" + "Số lẻ: " + soLe;

}
