<script>
import UserService from "./services/User.service";
export default {
  data() {
    return {
      user: {
        name: "",
        location: "",
        phone: "",
        number: "",
        answer: "",
      },
      showInfo: true,
      playGame: false,
      forecast: false,
      showTime: true,
      timer: null,
      totalTime: 25 * 60,
      resetButton: false,
      showAnwserGame: false,
      finishandshow: false,
      showGame: false,
      anwerTrue: 0,
      lengthQuesion: 0,
      timeResult: 0,
      showResult: false,
      disabledAnwser: false,
      numberAccess: "",
      p: 0,
      answers: [2, 3, 3, 1, 3, 3, 3, 0, 3, 3, 0, 0, 3, 2, 0, 2, 3, 2, 2, 2],
      questions: [
        {
          question:
            "Câu 1. Luật Phòng, chống bạo lực gia đình số 13/2022/QH15 gồm bao nhiêu chương, bao nhiêu điều luật ?",
          answers: [
            "a. 4 chương, 54 điều",
            "b. 5 chương, 55 điều",
            "c. 6 chương, 56 điều",
            "d. Tất cả đáp án trên đều sai",
          ],
        },
        {
          question:
            "Câu 2. Luật phòng, chống bạo lực gia đình 2022 có hiệu lực thi hành từ ngày, tháng, năm nào ?",
          answers: [
            "a. 01 tháng 6 năm 2022",
            "b. 01 tháng 7 năm 2022",
            "c. 01 tháng 6 năm 2023",
            "d. 01 tháng 7 năm 2023",
          ],
        },
        {
          question:
            "Câu 3. Trong Luật phòng, chống bạo lực gia đình 2022, hành vi 'Bạo lực gia đình' được hiểu như sau :",
          answers: [
            "a. là hành vi cố ý của thành viên gia đình gây tổn hại hoặc có khả năng gây tổn hại về thể chất, tinh thần đối với thành viên khác trong gia đình.",
            "b. là hành vi cố ý của thành viên gia đình gây tổn hại hoặc có khả năng gây tổn hại về tình dục đối với thành viên khác trong gia đình.",
            "c. là hành vi cố ý của thành viên gia đình gây tổn hại hoặc có khả năng gây tổn hại về kinh tế đối với thành viên khác trong gia đình.",
            "d. là hành vi cố ý của thành viên gia đình gây tổn hại hoặc có khả năng gây tổn hại về thể chất, tinh thần, tình dục, kinh tế đối với thành viên khác trong gia đình.",
          ],
        },
        {
          question:
            "Câu 4.Trong Luật phòng, chống bạo lực gia đình 2022 thì 'Cấm tiếp xúc' là biện pháp như thế nào ?",
          answers: [
            "a. cấm người có hành vi bạo lực gia đình đến gần người bị bạo lực gia đình.",
            "b. cấm người có hành vi bạo lực gia đình đến gần người bị bạo lực gia đình hoặc sử dụng phương tiện, công cụ để thực hiện hành vi bạo lực gia đình.",
            "c.  cấm người có hành vi bạo lực gia đình sử dụng phương tiện để thực hiện hành vi bạo lực gia đình.",
            "d. cấm người có hành vi bạo lực gia đình sử dụng công cụ để thực hiện hành vi bạo lực gia đình.",
          ],
        },
        {
          question:
            "Câu 5. Đâu là Hành vi bạo lực gia đình trong các hành vi nào sau đây ?",
          answers: [
            "a. Hành hạ, ngược đãi, đánh đập, đe dọa hoặc hành vi cố ý khác xâm hại đến sức khỏe, tính mạng;",
            "b. Lăng mạ, chì chiết hoặc hành vi cố ý khác xúc phạm danh dự, nhân phẩm;",
            "c. Cưỡng ép chứng kiến bạo lực đối với người, con vật nhằm gây áp lực thường xuyên về tâm lý;",
            "d. Tất cả các đáp án trên",
          ],
        },
        {
          question:
            "Câu 6. Theo Luật Phòng, chống bạo lực gia đình năm 2022 thì nội dung nào dưới đây là nguyên tắc   phòng, chống bạo lực gia đình ?",
          answers: [
            "a. Nâng cao trách nhiệm của cơ quan, tổ chức và người đứng đầu; chú trọng phối hợp liên ngành về phòng, chống bạo lực gia đình.",
            "b. Phát huy vai trò, trách nhiệm của cá nhân, gia đình, cộng đồng.",
            "c. Thực hiện trách nhiệm nêu gương trong phòng, chống bạo lực gia đình đối với cán bộ, công chức, viên chức và người thuộc lực lượng vũ trang nhân dân.",
            "d. Tất cả đáp án trên.",
          ],
        },
        {
          question:
            " Câu 7. Hành vi nào bị nghiêm cấm trong phòng, chống bạo lực gia đình trong các hành vi sau đây ?",
          answers: [
            "a. Cản trở việc phát hiện, báo tin, tố giác, ngăn chặn và xử lý hành vi bạo lực gia đình.",
            "b. Dung túng, bao che, không xử lý, xử lý không đúng quy định của pháp luật đối với hành vi bạo lực gia đình.",
            "c. Kích động, xúi giục, lôi kéo, dụ dỗ, giúp sức, cưỡng ép người khác thực hiện hành vi bạo lực gia đình.",
            "d. Tất cả các hành vi trên.",
          ],
        },
        {
          question:
            "Câu 8. Theo Luật Phòng, chống bạo lực gia đình năm 2022 thì một trong những nguyên tắc phòng, chống bạo lực gia đình là ưu tiên bảo vệ quyền và lợi ích hợp pháp của ai?",
          answers: [
            "a. ưu tiên bảo vệ quyềnvà lợi ích hợp pháp của người bị bạo lực gia đình là phụ nữ mang thai, phụ nữ đang nuôi con dưới 36 tháng tuổi, người cao tuổi, người khuyết tật, người không có khả năng tự chăm sóc.",
            "b. ưu tiên bảo vệ quyềnvà lợi ích hợp pháp của người bị bạo lực gia đình là phụ nữ và trẻ em.",
            "c. ưu tiên bảo vệ quyềnvà lợi ích hợp pháp của người bị bạo lực gia đình là phụ nữ mang thai, phụ nữ đang nuôi con dưới 12 tháng tuổi.",
            "d. ưu tiên bảo vệ quyềnvà lợi ích hợp pháp của người bị bạo lực gia đình là trẻ em, phụ nữ mang thai, phụ nữ đang nuôi con dưới 36 tháng tuổi, người cao tuổi, người khuyết tật, người không có khả năng tự chăm sóc.",
          ],
        },
        {
          question:
            "Câu 9. Tháng hành động quốc gia phòng, chống bạo lực gia đình được tổ chức vào tháng mấy hằng năm ?",
          answers: ["a. Tháng 3 ", "b. Tháng 4", "c. Tháng 5", "d. Tháng 6"],
        },
        {
          question:
            "Câu 10.  Nội dung hợp tác quốc tế về phòng, chống bạo lực gia đình bao gồm :",
          answers: [
            "a. Tham gia tổ chức quốc tế; ký kết, thực hiện điều ước quốc tế, thỏa thuận quốc tế về phòng, chống bạo lực gia đình; Xây dựng và thực hiện chương trình, dự án, hoạt động về phòng, chống bạo lực gia đình;",
            "b. Trao đổi thông tin và kinh nghiệm về phòng, chống bạo lực gia đình; Nghiên cứu khoa học, đào tạo nguồn nhân lực về phòng, chống bạo lực gia đình.",
            "c. Tất cả đều sai",
            "d. Tất cả đều đúng",
          ],
        },
        {
          question:
            "Câu 11. Theo Luật Phòng, chống bạo lực gia đình năm 2022 thì hành vi Tiết lộ hoặc phát tán thông tin về đời sống riêng tư, bí mật cá nhân và bí mật gia đình của thành viên gia đình trong trường hợp nào dưới đây là hành vi bạo lực gia đình ?",
          answers: [
            "a. nhằm xúc phạm danh dự, nhân phẩm",
            "b. trong mọi trường hợp",
            "c. trong trường hợp thành viên gia đình không đồng ý",
            "d. Tất cả đáp án trên",
          ],
        },
        {
          question:
            "Câu 12. Đâu là nội dung chính xác nhất liên đến thông tin, truyền thông, giáo dục ?",
          answers: [
            "a. Chính sách, pháp luật về phòng, chống bạo lực gia đình.",
            "b. Quyền và nghĩa vụ con người trong gia đình.",
            "c. Truyền thống của con người, gia đình Việt Nam.",
            "d. Kiến thức về ngăn chặn hành vi bạo lực gia đình.",
          ],
        },
        {
          question:
            "Câu 13. Cá nhân khi phát hiện hành vi bạo lực gia đình có trách nhiệm sau đây :",
          answers: [
            "a. Báo tin, tố giác ngay cho cơ quan, tổ chức, cá nhân có thẩm quyền quy định tại khoản 1 Điều 19 của Luật Phòng, chống bạo lực gia đình;",
            "b. Tham gia bảo vệ, hỗ trợ người bị bạo lực gia đình và các hoạt động phòng, chống bạo lực gia đình ở cộng đồng.",
            "c. Cả hai đều sai",
            "d. Cả hai đều đúng",
          ],
        },
        {
          question:
            "Câu 14. Hòa giải trong phòng, chống bạo lực gia đình là ? ",
          answers: [
            "a. Hòa giải trong phòng, chống bạo lực gia đình là việc người tiến hành hòa giải hướng dẫn các bên tự nguyện giải quyết mâu thuẫn, tranh chấp giữa các thành viên gia đình để không làm phát sinh, tái diễn hành vi bạo lực gia đình.",
            "b. Hòa giải trong phòng, chống bạo lực gia đình không thay thế biện pháp xử lý người có hành vi bạo lực gia đình.",
            "c. Cả hai đều đúng",
            "d. Cả hai đều sai",
          ],
        },
        {
          question: "Câu 15. Cơ sở trợ giúp phòng, chống bạo lực gia đình :",
          answers: [
            "a. Cơ sở khám bệnh, chữa bệnh;",
            "b. Ủy ban nhân dân các cấp",
            "c. Công an xã",
            "d. Ban chỉ huy quân sự địa phương",
          ],
        },
        {
          question:
            "Câu 16. Địa chỉ tiếp nhận tin báo, tố giác về hành vi bạo lực gia đình :",
          answers: [
            "a. Tòa án nhân dân cấp huyện",
            "b. Viện kiểm sát nhân dân cấp tỉnh",
            "c. Ủy ban nhân dân cấp xã nơi xảy ra hành vi bạo lực gia đình;",
            "d. Sở Tư pháp ",
          ],
        },
        {
          question:
            "Câu 17. Việc báo tin, tố giác về hành vi bạo lực gia đình thực hiện bằng hình thức nào ?",
          answers: [
            "a. Gọi điện, nhắn tin;",
            "b. Gửi đơn, thư;",
            "c. Trực tiếp báo tin.",
            "d. Tất cả các hình thức trên",
          ],
        },
        {
          question:
            "Câu 18. Ai là đối tượng cho Việc tư vấn về phòng, chống bạo lực gia đình tập trung vào ?",
          answers: [
            "a. Người bị bạo lực gia đình và Người có hành vi bạo lực gia đình;",
            "b. Trẻ em, phụ nữ mang thai, phụ nữ đang nuôi con dưới 18 tháng tuổi, người cao tuổi, người khuyết  tật, người không có khả năng tự chăm sóc; người sống ở vùng đồng bào dân tộc thiểu số và miền núi, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn;",
            "c. Người không thường xuyên có hành vi cổ xúy cho bạo lực, kỳ thị, phân biệt đối xử về giới, giới tính, định kiến giới;",
            "d. Người đã kết hôn.",
          ],
        },
        {
          question:
            "Câu 19.  Nội dung tư vấn về phòng, chống bạo lực gia đình ?",
          answers: [
            "a. Thông tin, kiến thức, pháp luật về phòng, chống bạo lực gia đình, hôn nhân và gia đình, giới, bình đẳng giới và quy định của pháp luật có liên quan; quyền và trách nhiệm của người bị bạo lực gia đình, thành viên khác trong gia đình;",
            "b. Kỹ năng ứng xử trong gia đình, tổ chức đời sống gia đình, xây dựng gia đình hạnh phúc, xử lý khi xảy ra hành vi bạo lực gia đình, chăm sóc người bị bạo lực gia đình.",
            "c. Cả hai đều đúng",
            "d. Cả hai đều sai",
          ],
        },
        {
          question:
            "Câu 20. Theo Luật Phòng, chống bạo lực gia đình năm 2022 thì nội dung nào dưới đây là Nguyên tắc phòng, chống bạo lực gia đình ?",
          answers: [
            "a. Phòng ngừa là chính, lấy người bạo lực gia đình là trung tâm.",
            "b. Xử lý vi phạm là chính, lấy người bị bạo lực gia đình là trung tâm.",
            "c. Phòng ngừa là chính, lấy người bị bạo lực gia đình là trung tâm.  ",
            "d. Phòng ngừa và xử lý vi phạm là chính, lấy người bị bạo lực gia đình là trung tâm.",
          ],
        },
      ],
    };
  },
  components: {},
  methods: {
    //Time
    startTimer: function () {
      const selectedAnswers = JSON.parse(
        localStorage.getItem("selectedAnswers")
      );
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      this.showGame = true;
      if (selectedAnswers) {
        localStorage.removeItem("selectedAnswers");
      }
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    padTime: function (time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function () {
      if (this.totalTime == 0) {
        alert("Hết thời gian làm bài !!!");
        this.finish();
        clearInterval(this.timer);
      }
      if (this.totalTime > 0) {
        this.totalTime--;
      }
    },
    checked(answerNumber) {
      const answers = document.querySelectorAll(".answer");
      for (var i = 0; i < answers.length; i++) {
        answers[i].classList.remove("checked");
      }
      var selectedAnswer = document.querySelectorAll(".answer")[answerNumber];
      if (selectedAnswer) selectedAnswer.classList.add("checked");
    },
    nextQuestion() {
      if (this.p < 19) {
        if (this.p < this.questions.length - 1) this.p++;
        const answers = document.querySelectorAll(".answer");
        for (var i = 0; i < answers.length; i++) {
          answers[i].classList.remove("checked");
        }
        const selectedAnswers = JSON.parse(
          localStorage.getItem("selectedAnswers")
        );
        if (selectedAnswers) this.checked(selectedAnswers[this.p]);
      } else {
        this.p = 0;
      }
    },
    backQuestion() {
      if (this.p > 0) this.p--;
      const answers = document.querySelectorAll(".answer");
      for (var i = 0; i < answers.length; i++) {
        answers[i].classList.remove("checked");
      }
      const selectedAnswers = JSON.parse(
        localStorage.getItem("selectedAnswers")
      );
      if (selectedAnswers) this.checked(selectedAnswers[this.p]);
    },
    storageAnswer(selectedAnswer) {
      this.checked(selectedAnswer);
      const selectedAnswers =
        JSON.parse(localStorage.getItem("selectedAnswers")) || [];
      selectedAnswers[this.p] = selectedAnswer;
      localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    },
    countDifferentElements(arr1, arr2) {
      var count = 0;
      var maxLength = Math.max(arr1.length, arr2.length);
      for (var i = 0; i < maxLength; i++) {
        if (arr1[i] == arr2[i]) {
          count++;
        }
      }
      return count;
    },
    showAnwser() {
      const selectedAnswers = JSON.parse(
        localStorage.getItem("selectedAnswers")
      );
      this.showTime = false;
      if (selectedAnswers) {
        const questionElements = document.querySelectorAll(".questions");
        const answers = document.querySelectorAll(".answerr");
        for (var i = 0; i < questionElements.length; i++) {
          var questionElement = questionElements[i];
          var answerElements = questionElement.querySelectorAll(".answerr");
          var correctAnswerIndexes = selectedAnswers[i]; // Lấy danh sách các đáp án đúng cho câu hỏi thứ i
          answerElements.forEach(function (answerElement, index) {
            var answerElement = answerElements[index];
            if (index == correctAnswerIndexes) {
              answerElement.classList.add("checked");
            }
          });
        }
        this.checkAnwser();
        this.stopTimer();
      } else {
        alert("Bạn chưa hoàn thành bài thi");
      }
    },
    checkAnwser() {
      const selectedAnswers = this.answers;
      const questionElements = document.querySelectorAll(".questions");
      const answers = document.querySelectorAll(".answerr");
      for (var i = 0; i < questionElements.length; i++) {
        var questionElement = questionElements[i];
        var answerElements = questionElement.querySelectorAll(".answerr");
        var correctAnswerIndexes = selectedAnswers[i]; // Lấy danh sách các đáp án đúng cho câu hỏi thứ i
        answerElements.forEach(function (answerElement, index) {
          var answerElement = answerElements[index];
          if (index == correctAnswerIndexes) {
            answerElement.classList.add("answer-true");
          }
        });
      }
      this.showAnwserGame = true;
    },
    finish() {
      const selectedAnswers = JSON.parse(
        localStorage.getItem("selectedAnswers")
      );
      const answers = document.querySelectorAll(".answer");
      const bth_finish = document.querySelector(".btn-finish");
      if (selectedAnswers) {
        if (confirm(`Bạn có chắc chăn hoàn thành bài thi ?`)) {
          this.result();
          this.stopTimer();
          this.finishandshow = true;
          this.forecast = true;
          answers.forEach(function (item, index) {
            item.classList.add("disabled");
          });
          bth_finish.classList.add("disabled");
        }
      } else {
        alert("Bạn chưa hoàn thành bài thi");
      }
      this.showTime = false;
    },
    reset() {
      localStorage.removeItem("selectedAnswers");
      if (confirm("Bạn có chắc chắn muốn làm lại ?")) location.reload();
    },
    result() {
      const selectedAnswers = JSON.parse(
        localStorage.getItem("selectedAnswers")
      );
      this.anwerTrue = this.countDifferentElements(
        this.answers,
        selectedAnswers
      );
      this.user.answer = this.anwerTrue;
      this.lengthQuesion = this.questions.length;

      // this.timeResult = this.totalTime;
    },
    endTime() {
      alert("Hết giờ");
    },
    access(a) {
      alert("Dự đoán thành công");
      localStorage.setItem("Access", JSON.stringify(+a));
      this.forecast = false;
      this.createUser();
      this.showResult = true;
    },
    accessUser() {
      this.playGame = true;
      this.showInfo = false;
    },
    async createUser() {
      try {
        const createUser = await UserService.create(this.user);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    minutes: function () {
      return this.padTime(Math.floor(this.totalTime / 60));
    },
    seconds: function () {
      return this.padTime(this.totalTime - this.minutes * 60);
    },
    resultTime() {
      const time = this.totalTime;
      var minutes = Math.floor(time / 60);
      var remainingSeconds = time % 60;
      return {
        minutes: minutes,
        seconds: remainingSeconds,
      };
    },
  },
};
</script>

<template>
  <div class="heading">
    <img src="./assets/img/logovks.png" alt="logoVKS" class="logo" />
    <h2 class="text-center title">VIỆN KIỂM SÁT NHÂN DÂN THÀNH PHỐ CẦN THƠ</h2>
  </div>
  <div class="user" v-if="showInfo">
    <form class="form-user" action="" @submit.prevent="accessUser()">
      <div class="mb-3 mt-3 form-style">
        <input
          type="text"
          class="form-control"
          id="hoten"
          placeholder="Nhập họ tên"
          name="hoten"
          required
          v-model="user.name"
        />
        <div class="invalid-feedback">Không để rỗng trường này</div>
      </div>
      <div class="mb-3 mt-3 form-style">
        <input
          type="text"
          class="form-control"
          id="location"
          placeholder="Nhập đơn vị công tác"
          name="location"
          required
          v-model="user.location"
        />
        <div class="invalid-feedback">Không để rỗng trường này</div>
      </div>
      <div class="mb-3 mt-3 form-style">
        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="Nhập số điện thoại"
          name="phone"
          required
          v-model="user.phone"
        />
        <div class="invalid-feedback">Không để rỗng trường này</div>
      </div>
      <button type="submit" class="btn btn-primary btn-access">Xác nhận</button>
    </form>
  </div>
  <div class="exam" v-if="playGame">
    <div class="wrapper">
      <div class="left-site">
        <div class="timer">
          <div class="wrapper-timer">
            <div>
              <div id="timer" class="text-center">
                <span id="minute">{{ minutes }}</span>
                <span id="colon">:</span>
                <span id="seconds">{{ seconds }}</span>
              </div>
              <div id="buttons" class="justify-content-center" v-if="showTime">
                <!--  START BUTTON    -->
                <button
                  id="start"
                  class="btn btn-lg btn-danger"
                  v-if="!timer"
                  @click="startTimer"
                >
                  Bắt Đầu
                  <i class="far fa-play-circle" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-site">
        <img src="./assets/img/market.jpg" alt="market" />
      </div>
    </div>
    <div class="wrapper-exam" v-show="showGame">
      <h2 class="question-title text-center w-100">Câu hỏi</h2>
      <div class="wrapper-question">
        <p class="question ml-2">
          <span>{{ questions[p].question }}</span>
        </p>
        <div
          class="answers d-flex flex-wrap justify-content-center align-items-center"
        >
          <div
            class="answer"
            v-for="(answer, index) in questions[p].answers"
            @click="storageAnswer(index)"
          >
            <p class="answer-item">{{ answer }}</p>
          </div>
        </div>
      </div>
      <div class="btn-list">
        <button class="btn btn-danger mr-4 ml-4 mt-4" @click="backQuestion()">
          Trở về
        </button>
        <button class="btn btn-danger mr-4 ml-4 mt-4" @click="nextQuestion()">
          Câu kế tiếp
        </button>
        <button
          class="btn btn-danger mr-4 ml-4 mt-4 btn-finish"
          @click="finish()"
        >
          Hoàn thành bài thi
        </button>
        <button
          class="btn btn-danger mr-4 ml-4 mt-4"
          @click="showAnwser()"
          v-show="this.finishandshow"
        >
          Xem đáp án
        </button>
        <button class="btn btn-danger mr-4 ml-4 mt-4" @click="reset()">
          Làm lại
        </button>
      </div>
    </div>
    <div class="forecast" v-if="forecast">
      <input
        type="text"
        class="forecasted"
        placeholder="Hãy dự đoán số người trả lời đúng 20 câu"
        v-model="user.number"
      /><br />
      <button
        class="btn btn-danger mr-4 ml-4 mt-4 btn-access"
        type="submit"
        @click="access(user.number)"
      >
        Dự đoán
      </button>
    </div>
    <div class="showResult text-center" v-if="showResult">
      <h2>Kết quả</h2>
      <h5>Họ và tên : {{ this.user.name }}</h5>
      <h5>Số điện thoại : {{ this.user.phone }}</h5>
      <h5>Đơn vị : {{ this.user.location }}</h5>
      <div>
        <h2>
          Số câu trả lời đúng : {{ this.anwerTrue }} /
          {{ this.lengthQuesion }} câu
        </h2>
        <h3>
          Thời gian làm bài là
          {{
            24 - resultTime.minutes < 9
              ? 24 - resultTime.minutes > 0
                ? "0" + (24 - resultTime.minutes) + " phút"
                : ""
              : 24 - resultTime.minutes > 0
              ? 24 - resultTime.minutes + " phút"
              : ""
          }}
          :
          {{
            60 - resultTime.seconds < 9
              ? "0" + (60 - resultTime.seconds) + " giây"
              : 60 - resultTime.seconds + " giây"
          }}
        </h3>
      </div>

      <!-- Đáp án -->
    </div>
    <div class="answer-show" v-show="showAnwserGame">
      <div class="questions" v-for="item in questions">
        <p class="questionn">
          <span>{{ item.question }}</span>
        </p>
        <div
          class="answers d-flex flex-wrap justify-content-center align-items-center"
        >
          <div class="answerr" v-for="(answer, index) in item.answers">
            <p class="answer-item">{{ answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  display: flex;
  justify-content: center;
}
.user .form-user {
  width: 500px;
}
.disabled {
  pointer-events: none;
}
.heading {
  display: flex;
  justify-content: center;
  background-color: #0468cc;
  align-items: center;
  padding: 12px;
}
.title {
  color: red;
  margin-left: 12px;
}
.logo {
  width: 150px;
  height: 100px;
  border-radius: 100%;
}
.wrapper {
  margin-top: 16px;
  display: flex;
  justify-content: space-around;
}
.left-site {
  width: 20%;
  height: 200px;
}
.center-site {
  width: 70%;
  height: 100%;
  border-radius: 10px;
}
.center-site img {
  width: 100%;
  height: 250px;
}
.question-title {
  width: 200px;
}
.question,
.questionn {
  font-size: var(--text-game);
  font-weight: 500;
}
.answer,
.answerr {
  font-size: 20px;
  font-weight: 400;
  margin: 5px;
  width: 49%;
  height: 150px;
  background-color: #0468cc;
  color: white;
  border-radius: 10px;
}
.answerr.checked,
.answer.checked {
  background-color: yellow;
  color: #000;
}
.answer-true {
  background-color: #3399fe;
  color: #fff;
}
.answer:hover {
  cursor: pointer;
  opacity: 0.8;
}
.answer-item {
  display: block;
  padding-top: 10px;
  padding-left: 10px;
}
.btn-list {
  display: flex;
  justify-content: center;
}
.btn-list button {
  background-color: #e00204;
  padding: 16px;
  width: 200px;
}
.btn-list button:hover {
  opacity: 0.5;
}
.btn-access {
  padding: 16px;
  width: 200px;
}
/* time */
.wrapper-timer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0468cc;
  border-radius: 50%;
  width: 300px;
  height: 250px;
  margin-left: 16px;
}
#timer {
  font-size: 60px;
  color: rgb(250, 250, 250);
}
#buttons {
  display: flex;
}
button {
  margin: 2px;
}
.forecast {
  text-align: center;
}
.forecasted {
  width: 500px;
  height: 100px;
  margin-top: 16px;
  border-radius: 50px;
  font-weight: 200;
  font-size: 16px;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .title {
    margin-left: 6px;
    margin-bottom: 0;
    font-size: 18px;
  }
  .logo {
    width: 80px;
    height: 80px;
  }
  .question,
  .questionn,
  .answer,
  .answerr,
  .showResult h2,
  .showResult h5,
  .showResult div h2,
  .showResult div h3 {
    font-size: 12px;
  }
  .question,
  .questionn {
    margin: 0 !important;
  }
  .left-site {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .wrapper .center-site {
    display: none;
  }
  .btn-list {
    flex-wrap: wrap;
  }
  .answer,
  .answerr {
    width: 90%;
    height: 100%;
  }
  .answers {
    display: block;
  }
  .btn-list button,
  .btn-access {
    font-size: 12px;
    background-color: #e00204;
    padding: 12px;
    width: 150px;
  }
  .forecasted {
    width: 100%;
    font-size: 20px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .title {
    margin-left: 6px;
    margin-bottom: 0;
    font-size: 22px;
  }
  .logo {
    width: 80px;
    height: 80px;
  }
  .question,
  .questionn,
  .answer,
  .answerr,
  .showResult h2,
  .showResult h5,
  .showResult div h2,
  .showResult div h3 {
    font-size: 16px;
  }
  .question,
  .questionn {
    margin: 0 !important;
  }
  .left-site {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .wrapper .center-site {
    display: none;
  }
  .btn-list {
    flex-wrap: wrap;
  }
  .answer,
  .answerr {
    width: 90%;
    height: 100%;
  }
  .answers {
    display: block;
  }
  .btn-list button,
  .btn-access {
    font-size: 16px;
    background-color: #e00204;
    padding: 16px;
    width: 150px;
  }
  .forecasted {
    width: 100%;
    font-size: 20px;
  }
}
</style>
