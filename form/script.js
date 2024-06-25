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

function disableElementIfConditionAbuse() {
    const element1 = document.getElementById('physical-valence');
    const element2 = document.getElementById('source-abuse');
    if (element1 && element2) {
        if (element1.value=="no" || element1.value=="not-interest") {
            element2.value="Nill";
            element2.disabled = true;
        } else {
            element2.disabled = false;
        }
    }
}

function disableElementIfConditionMentalAbuse() {
    const element1 = document.getElementById('mental-abuse');
    const element2 = document.getElementById('source-abuse-mental');
    if (element1 && element2) {
        if (element1.value=="no" || element1.value=="not-interest") {
            element2.value="Nill";
            element2.disabled = true;
        } else {
            element2.disabled = false;
        }
    }
}

function ifNotReason()
{
    const element1 = document.getElementById('do-you-participate-decision-making-at-home');
    const element2 = document.getElementById('if-not-decision-making-at-home-why');
    if(element1.value == 'yes')
    {
        element2.disabled = true;
        element2.value = 'none'
    }
    else
    {
        element2.disabled = false;
    }
}

function YesAndNo()
{
    const element1 = document.getElementById('do-you-go-outside-for-personnel-purpose');

    const element2A = document.querySelector('label[for="if-yes-where-do-you-visit"]');
    const element2B = document.getElementById('if-yes-where-do-you-visit');

    const element3A = document.querySelector('label[for="if-you-dont-visit-places-why"]');
    const element3B = document.getElementById('if-you-dont-visit-places-why');

    if(element1.value == 'no')
        {
            element2A.style.display = 'none';
            element2B.style.display = 'none';
            
            element3A.style.display = 'block';
            element3B.style.display = 'block';
        }
    else
        {
            element2A.style.display = 'block';
            element2B.style.display = 'block';
            
            element3A.style.display = 'none';
            element3B.style.display = 'none';
        }


}