const questionBank = [
{question:'Thiết kế phần mềm là gì?',answers:['Viết mã','Xác định thành phần phần mềm','Kiểm thử','Bảo trì'],correct:1},
{question:'Hiện thực phần mềm là gì?',answers:['Kiểm thử','Hiện thực hóa thiết kế thành chương trình','Viết tài liệu','Bảo trì'],correct:1},
{question:'Thiết kế và hiện thực phần mềm là hai hoạt động như thế nào?',answers:['Tách biệt','Đan xen','Độc lập','Không liên quan'],correct:1},
{question:'Thiết kế hướng đối tượng sử dụng gì để biểu diễn?',answers:['UML','SQL','HTML','XML'],correct:0},
{question:'Thiết kế mẫu là gì?',answers:['Phương pháp lập trình','Thiết kế giao diện','Giải quyết vấn đề thiết kế thường gặp','Kiểm thử phần mềm'],correct:2},
{question:'Phát triển mã nguồn mở liên quan đến gì?',answers:['Phần mềm đóng gói','Thành phần mã nguồn mở','Thiết kế giao diện','Quản lý dự án'],correct:1},
{question:'Nguyên tắc chính trong thiết kế giao diện người dùng là gì?',answers:['Tối ưu di động','Xem xét nhu cầu và khả năng người dùng','Tăng tốc phát triển','Giảm chi phí'],correct:1},
{question:'Thiết kế UI cần nhận thức điều gì?',answers:['Hạn chế tài chính','Hạn chế vật lý và tinh thần người dùng','Công nghệ mới','Yêu cầu chức năng'],correct:1},
{question:'Mô hình thiết kế hệ thống có vai trò gì trong dự án lớn?',answers:['Giảm thời gian','Cơ chế giao tiếp giữa nhóm thiết kế','Tăng chi phí','Giảm lỗi'],correct:1},
{question:'Thiết kế thuật toán là gì?',answers:['Thiết kế giao diện','Thiết kế thuật toán giải quyết vấn đề','Viết mã','Kiểm thử'],correct:1},
{question:'Thiết kế cơ sở dữ liệu liên quan đến điều gì?',answers:['Thiết kế giao diện','Cấu trúc và tổ chức CSDL','Thiết kế thuật toán','Kiểm thử CSDL'],correct:1},
{question:'Trong thiết kế giao diện người dùng, cần thừa nhận điều gì?',answers:['Người dùng luôn biết cách dùng','Ai cũng có thể nhầm lẫn','Hệ thống không lỗi','Giao diện không cần thân thiện'],correct:1},
{question:'Mục đích chính của thiết kế giao diện người dùng là gì?',answers:['Tăng tốc phát triển','Đáp ứng nhu cầu và trải nghiệm người dùng','Giảm chi phí','Tăng bảo mật'],correct:1},
{question:'Quá trình thiết kế phần mềm bao gồm gì?',answers:['Viết mã','Định nghĩa thành phần và liên kết','Kiểm thử','Bảo trì'],correct:1},
{question:'Ví dụ về biểu đồ hoạt động trong thiết kế phần mềm?',answers:['Biểu đồ lớp','Biểu đồ liên kết','Biểu đồ swimming lane','Biểu đồ thành phần'],correct:2},
{question:'Quản lý bản quyền trong thiết kế phần mềm liên quan đến điều gì?',answers:['Dùng mã nguồn mở không kiểm tra','Duy trì thông tin thành phần mã nguồn mở đã dùng','Thiết kế giao diện','Bảo trì'],correct:1},
{question:'Nguyên tắc quan trọng trong thiết kế phần mềm là gì?',answers:['Giảm mã nguồn','Dễ bảo trì và mở rộng','Tăng thành phần','Giảm tài liệu'],correct:1},
{question:'Thiết kế cơ sở dữ liệu bao gồm việc gì?',answers:['Xác định cấu trúc và tổ chức dữ liệu','Viết mã','Thiết kế giao diện','Kiểm thử CSDL'],correct:0},
{question:'Thiết kế thuật toán có vai trò gì?',answers:['Định nghĩa giao diện','Giải quyết vấn đề bằng bước xử lý','Tăng tốc phát triển','Bảo trì'],correct:1},
{question:'Mục đích hiện thực phần mềm là gì?',answers:['Đáp ứng yêu cầu thiết kế chi tiết','Thỏa mãn người dùng','Tăng phức tạp','Giảm chi phí'],correct:0},
{question:'Unit Implementation là gì?',answers:['Lập trình đơn vị nhỏ nhất','Thiết kế giao diện','Tài liệu hướng dẫn','Kiểm tra bảo trì'],correct:0},
{question:'Quy tắc vàng trong hiện thực phần mềm là gì?',answers:['Kiểm tra yêu cầu và thiết kế lại','Không cần kiểm tra','Lập trình nhanh','Đơn giản hóa quy trình'],correct:0},
{question:'Tại sao cần xác nhận thiết kế chi tiết trước khi hiện thực?',answers:['Đảm bảo đáp ứng yêu cầu người dùng','Giảm chi phí','Tiết kiệm kiểm thử','Tăng tốc mã hóa'],correct:0},
{question:'Mục đích ghi lại lỗi khi dùng form là gì?',answers:['Theo dõi và sửa lỗi hệ thống','Lưu dữ liệu','Tăng tốc phát triển','Phân tích thị trường'],correct:0},
{question:'Tiêu chuẩn yêu cầu đối với mã hóa bao gồm gì?',answers:['Đúng đắn và rõ ràng','Linh hoạt và tiết kiệm','Đơn giản và nhanh','Bảo mật và mở rộng'],correct:0},
{question:'Ước lượng kích thước và thời gian dựa trên gì?',answers:['Dữ liệu có sẵn','Kinh nghiệm cá nhân','Yêu cầu khách hàng','Ngân sách'],correct:0},
{question:'Hiện thực mã chương trình bao gồm bước nào?',answers:['Lập kế hoạch cấu trúc và thiết kế mã','Thiết kế giao diện','Viết tài liệu','Báo cáo phân tích'],correct:0},
{question:'Tại sao cần tự kiểm tra thiết kế trước khi mã hóa?',answers:['Đảm bảo đúng đắn và hiệu quả','Tăng tốc mã hóa','Giảm chi phí','Làm hài lòng khách'],correct:0},
{question:'Quy tắc đặt tên trong mã chương trình cần tuân thủ gì?',answers:['Phù hợp và rõ ràng','Ngắn gọn','Phức tạp','Bất kỳ tên nào'],correct:0},
{question:'Kiểm tra Class cần xem xét điều gì?',answers:['Tên thích hợp','Có trừu tượng','Header mô tả mục đích','Tất cả'],correct:3},
{question:'Kiểm tra thuộc tính cần xác định điều gì?',answers:['Cần thiết','Có thể static','Có nên final','Tất cả'],correct:3},
{question:'Kiểm tra phương thức khởi dựng cần xác định điều gì?',answers:['Cần thiết','Leverage constructor','Initialize tất cả thuộc tính','Tất cả'],correct:3},
{question:'Làm thế nào để lập trình 1000 LoC/ngày?',answers:['Lập kế hoạch cấu trúc và thiết kế mã','Tăng tốc đánh máy','Tập trung yêu cầu khách hàng','Giảm kiểm tra mã'],correct:0},
{question:'Kiểm tra thuộc tính cần xác định điều gì?',answers:['Cần thiết','Có thể static','Có nên final','Tất cả'],correct:3},
{question:'Tại sao cần ghi chú mốc thời gian khi hiện thực mã?',answers:['Theo dõi tiến độ và quản lý thời gian','Lưu dữ liệu','Phân tích thị trường','Giảm chi phí'],correct:0},
{question:'Việc chuẩn bị để hiện thực bao gồm gì?',answers:['Xác định thiết kế chi tiết','Mã hóa từ thiết kế văn bản','Đo thời gian phân loại','Tất cả'],correct:3},
{question:'Mục đích biên dịch mã lệnh là gì?',answers:['Kiểm tra và sửa lỗi cú pháp','Thiết kế giao diện','Viết tài liệu','Báo cáo phân tích'],correct:0},
{question:'Mục tiêu kiểm thử phần mềm là gì?',answers:['Chỉ ra chương trình đúng và tìm lỗi','Giảm chi phí','Tăng tốc lập trình','Làm hài lòng khách'],correct:0},
{question:'Kiểm thử đơn vị tập trung vào điều gì?',answers:['Chức năng đối tượng/phương thức','Giao diện người dùng','Hiệu suất hệ thống','Bảo mật'],correct:0},
{question:'Kiểm thử component tập trung vào điều gì?',answers:['Giao diện component','Chức năng phương thức','Bảo mật','Giao diện người dùng'],correct:0},
{question:'Kiểm thử hệ thống tập trung vào điều gì?',answers:['Tương tác giữa các component','Giao diện người dùng','Bảo mật','Hiệu suất'],correct:0},
{question:'Kiểm thử tự động nên dùng gì?',answers:['Framework kiểm thử tự động (JUnit)','Công cụ thủ công','Phần mềm giao diện','Chương trình bảo mật'],correct:0},
{question:'Mục tiêu kiểm thử giao diện là gì?',answers:['Tìm lỗi do giao diện hoặc giả định sai','Kiểm thử chức năng','Hiệu suất','Bảo mật'],correct:0},
{question: "Một loại giao diện trong kiểm thử giao diện là gì?",answers: ["Giao diện có tham số", "Giao diện người dùng","Giao diện hệ thống","Giao diện bảo mật"],correct: 0
},
];
let currentQuestions=[];

function shuffle(arr){
    return [...arr].sort(() => Math.random() - 0.5);
}

function shuffleAnswers(question){

    const options = question.answers.map((answer,index)=>({
        text: answer,
        originalIndex: index
    }));

    const shuffled = shuffle(options);

    const newCorrect = shuffled.findIndex(
        option => option.originalIndex === question.correct
    );

    return {
        question: question.question,
        answers: shuffled.map(option => option.text),
        correct: newCorrect
    };
}

function loadQuiz(){

    // Reset kết quả
    document.getElementById('result').innerText =
        '🎯 Điểm số: 0/30';

    currentQuestions = shuffle(questionBank)
        .slice(0, Math.min(30, questionBank.length))
        .map(q => shuffleAnswers(q));

    const quiz = document.getElementById('quiz');
    quiz.innerHTML = '';

    currentQuestions.forEach((q,i)=>{

        let html = `
        <div class="question" id="q${i}">
            <h3>Câu ${i+1}: ${q.question}</h3>
        `;

        q.answers.forEach((a,j)=>{

            html += `
            <label>
                <input type="radio"
                       name="q${i}"
                       value="${j}">
                ${String.fromCharCode(65+j)}. ${a}
            </label><br>
            `;
        });

        html += '</div>';

        quiz.innerHTML += html;
    });
}

function submitQuiz(){
let score=0;
currentQuestions.forEach((q,i)=>{
const s=document.querySelector(`input[name="q${i}"]:checked`);
const box=document.getElementById(`q${i}`);
box.classList.remove('correct','wrong');
if(s && Number(s.value)===q.correct){score++;box.classList.add('correct');}
else{box.classList.add('wrong');}
});
document.getElementById('result').innerText=`Điểm: ${score}/${currentQuestions.length}`;
}
loadQuiz();
