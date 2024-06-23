document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.question');

    questions.forEach(function(question) {
        var select = question.querySelector('select[name="question"]');
        select.addEventListener('change', function() {
            var dropdown = question.querySelector('.dropdown');
            if (select.value === 'yes') {
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none';
            }
        });
    });
});

