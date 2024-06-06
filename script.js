let currentLevel = 1;
let differencesFound = 0;

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const passwordResult = document.getElementById('passwordResult');
    
    if (currentLevel === 1) {
        if (passwordInput === 'password1') {
            passwordResult.textContent = 'YEEEES';
            currentLevel = 2;
            document.getElementById('game1').style.display = 'none';
            document.getElementById('game2').style.display = 'block';
        } else {
            passwordResult.textContent = 'You Dont love me.';
        }
    }
}
function findDifferences() {
    differencesFound++;
    document.getElementById('result').textContent = `找到了第${differencesFound}個不同之處！`;

    if (differencesFound === 5) {
        document.getElementById('result').textContent = '恭喜！你已找到所有的不同之處！';
        document.getElementById('image1').removeEventListener('click', findDifferences);
        document.getElementById('image2').removeEventListener('click', findDifferences);
    }
}

document.getElementById('image1').addEventListener('click', findDifferences);
document.getElementById('image2').addEventListener('click', findDifferences);
