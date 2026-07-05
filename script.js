const unlockBtn = document.getElementById('unlock-btn');
const nextBtn = document.getElementById('next-btn');

const coverScreen = document.getElementById('cover');
const secretNote = document.getElementById('secret-note');
const storySection = document.getElementById('story-section');
const questionSection = document.getElementById('question-section');

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const bgMusic = document.getElementById('bg-music');
const musicIndicator = document.getElementById('music-indicator');
const docStatus = document.getElementById('doc-status');
const particlesContainer = document.getElementById('particles-container');

function startFloatingParticles() {
    const assets = ['♥', '♪', '♫', '♬'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        const randomAsset = assets[Math.floor(Math.random() * assets.length)];
        
        if (randomAsset === '♥') {
            particle.classList.add('heart');
        } else {
            particle.classList.add('note-particle');
        }
        
        particle.innerHTML = randomAsset;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 3 + 5 + 's'; 
        particle.style.fontSize = Math.random() * 14 + 12 + 'px'; 
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => { particle.remove(); }, 8000);
    }, 450);
}

unlockBtn.addEventListener('click', () => {
    bgMusic.currentTime = 58; 
    bgMusic.play().catch(err => console.log("Audio play deferred."));
    
    startFloatingParticles();
    musicIndicator.classList.remove('hidden');

    coverScreen.style.opacity = 0;
    coverScreen.style.transition = 'opacity 0.4s ease';
    
    setTimeout(() => {
        coverScreen.classList.add('hidden'); 
        secretNote.classList.remove('hidden'); 
        setTimeout(() => { 
            secretNote.style.opacity = 1; 
            setTimeout(() => {
                docStatus.innerText = '✓ Connected';
                docStatus.style.color = '#ce9f8e';
            }, 1200);
        }, 50);
    }, 400);
});

nextBtn.addEventListener('click', () => {
    storySection.style.opacity = 0;
    storySection.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        storySection.classList.add('hidden');
        questionSection.classList.remove('hidden');
        questionSection.style.opacity = 0;
        questionSection.style.transition = 'opacity 0.4s ease';
        setTimeout(() => { questionSection.style.opacity = 1; }, 50);
    }, 300);
});

yesBtn.addEventListener('click', () => {
    secretNote.style.opacity = 0;
    
    setTimeout(() => {
        secretNote.innerHTML = `
            <header class="note-header">
                <div class="header-top-meta">
                    <p class="date">Thank you</p>
                    <span class="status-badge" style="color: #ce9f8e;">✓ Confirmed</span>
                </div>
                <div class="header-line"></div>
            </header>
            <h1 class="salutation" style="text-align: center; margin-top: 20px;">Thank you for saying yes.</h1>
            <p style="text-align: center; color: #444; font-weight: 300; line-height: 1.8; padding-bottom: 20px; margin: 0 auto; max-width: 90%;">
                That means a lot to me, Audrey. <br><br>
                Good luck with your performance for the Freshman Walk this July 16! I know you'll do amazing. If it's alright with you, I'd love to take a photo with you at our CSSOC photo booth after your performance! 😊✨
            </p>
        `;
        secretNote.style.opacity = 1;
    }, 400);
});

noBtn.addEventListener('click', () => {
    secretNote.style.opacity = 0;
    
    setTimeout(() => {
        secretNote.innerHTML = `
            <header class="note-header">
                <div class="header-top-meta">
                    <p class="date">Confirmation</p>
                    <span class="status-badge" style="color: #9a9182;">● Verification</span>
                </div>
                <div class="header-line"></div>
            </header>
            <h1 class="salutation" style="text-align: center; margin-top: 20px;">Are you sure about that?</h1>
            <p style="text-align: center; color: #444; font-weight: 300; line-height: 1.8; margin-bottom: 25px;">
                No pressure at all, Audrey, but I just want to make sure you didn't click it by mistake. 
            </p>
            <footer class="action-area">
                <button id="final-no-btn" class="btn btn-primary">Yes, I'm sure</button>
                <button id="back-yes-btn" class="btn btn-secondary">Wait, I changed my mind</button>
            </footer>
        `;
        secretNote.style.opacity = 1;

        const finalNoBtn = document.getElementById('final-no-btn');
        const backYesBtn = document.getElementById('back-yes-btn');

        finalNoBtn.addEventListener('click', () => {
            secretNote.style.opacity = 0;
            setTimeout(() => {
                secretNote.innerHTML = `
                    <header class="note-header">
                        <div class="header-top-meta">
                            <p class="date">Thank you</p>
                            <span class="status-badge">✓ Closed</span>
                        </div>
                        <div class="header-line"></div>
                    </header>
                    <h1 class="salutation" style="text-align: center; margin-top: 20px;">I completely understand.</h1>
                    <p style="text-align: center; color: #444; font-weight: 300; line-height: 1.8; padding-bottom: 20px;">
                        Thank you for being honest and for taking the time to read this anyway. I really appreciate it. <br><br>
                        Good luck with your performance for the Freshman Walk this July 16! Break a leg!
                    </p>
                `;
                secretNote.style.opacity = 1;
            }, 400);
        });

        backYesBtn.addEventListener('click', () => {
            secretNote.style.opacity = 0;
            setTimeout(() => {
                secretNote.innerHTML = `
                    <header class="note-header">
                        <div class="header-top-meta">
                            <p class="date">Thank you</p>
                            <span class="status-badge" style="color: #ce9f8e;">✓ Confirmed</span>
                        </div>
                        <div class="header-line"></div>
                    </header>
                    <h1 class="salutation" style="text-align: center; margin-top: 20px;">Thank you for saying yes.</h1>
                    <p style="text-align: center; color: #444; font-weight: 300; line-height: 1.8; padding-bottom: 20px; margin: 0 auto; max-width: 90%;">
                        That means a lot to me, Audrey. <br><br>
                        Good luck with your performance for the Freshman Walk this July 16! I know you'll do amazing. If it's alright with you, I'd love to take a photo with you at our CSSOC photo booth after your performance!
                    </p>
                `;
                secretNote.style.opacity = 1;
            }, 400);
        });

    }, 400);
});