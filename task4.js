let paragrafe = document.querySelectorAll('.paragraf');

for (let i = 0; i < paragrafe.length; i++) {
    if (i % 2 == 0) {
        paragrafe[i].style.backgroundColor = 'purple';
    } else {
        paragrafe[i].style.backgroundColor = 'green';
    }
}