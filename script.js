// Adding smooth scroll behaviour to page on clicking navigation links
var navLinks = document.querySelectorAll('.nav-menu a');
for(var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', function(event){
        event.preventDefault();
        var sectionId = this.textContent.toLowerCase().trim();
        var sectionElement = document.getElementById(sectionId);
        if(sectionElement == null){
            return;
        }

        var interval = setInterval(function(){
            var sectionPos = sectionElement.getBoundingClientRect();
            if(sectionPos.y <= 0){
                clearInterval(interval);
                return;
            }else{
                window.scrollBy(0, 50);
            }
        }, 20);

    });
}

// Adding smooth filling skill capsules behaviour on skills-display visibility
var skillProgress = document.querySelectorAll('.skill-progress');
var skillLevel = document.querySelectorAll('.skill-progress>div');
var skillProgressArr = new Array(skillProgress.length);

for(let i = 0; i < skillProgressArr.length; i++){
    skillProgressArr[i] = false;
}
// setting initial skill level to 0
for(let i = 0; i < skillLevel.length; i++){
    skillLevel[i].style.width = "0%";
}

window.addEventListener('scroll', function(){
    for(let i = 0; i < skillProgress.length; i++){
        let skillProgressCoordinates = skillProgress[i].getBoundingClientRect();
        if(skillProgressCoordinates.y < window.innerHeight && !skillProgressArr[i]){
            skillProgressArr[i] = true;
            let currLevel = 0;
            let maxLevel = skillLevel[i].getAttribute('data-skill-level');
            let interval = setInterval(function(){
                    if(currLevel == maxLevel){
                        clearInterval(interval);
                        return;
                    }else{
                        currLevel++;
                        skillLevel[i].style.width = currLevel + "%";
                    }
            }, 10);
        }

        if(skillProgressCoordinates.y >= window.innerHeight){
            skillLevel[i].style.width = 0 + '%';
            skillProgressArr[i] = false;
        }
    }

});