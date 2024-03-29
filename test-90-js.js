
document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            var link = this.dataset.link; // 使用 dataset.link 获取链接地址
            if (link) {
                window.location.href = link;
            }
        });
    });
});
