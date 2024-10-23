document.getElementById('generateButton').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value;
    const content = document.getElementById('content').value;
    const sender = document.getElementById('sender').value;

    const canvas = document.getElementById('letterCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600; // 배경지 크기
    canvas.height = 400; // 배경지 크기

    const backgroundImage = new Image();
    backgroundImage.src = 'path/to/your/image.png'; // 여기 배경지 이미지 경로 입력

    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black'; // 텍스트 색상
        ctx.font = '24px Hana'; // 폰트 설정

        ctx.fillText(`Dear. ${recipient}`, 50, 100);
        ctx.fillText(content, 50, 150);
        ctx.fillText(`From. ${sender}`, 50, 200);
        
        // 이미지 저장 기능 추가
        const link = document.createElement('a');
        link.download = 'letter.png';
        link.href = canvas.toDataURL();
        link.click();
    };
});
