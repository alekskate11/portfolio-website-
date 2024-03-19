document.querySelectorAll('.nav-a').forEach(link => {
	link.addEventListener('mousemove', (e) => {
	  const letters = link.querySelectorAll('.nav-a-letter');
	  const rect = link.getBoundingClientRect();
	  const relX = e.pageX - rect.left;
  
	  letters.forEach(letter => {
		const letterRect = letter.getBoundingClientRect();
		if (relX > letterRect.left && relX < letterRect.right) {
		  const top = letterRect.top - rect.top;
		  link.style.setProperty('--line-top', `${top}px`);
		}
	  });
	});
  });

  window.addEventListener('scroll', function() {
	var header = document.querySelector('.header');
	var technoBlock = document.querySelector('.techno-stack-techno-block');
	
	// Get the position of the techno-block relative to the viewport
	var technoBlockPosition = technoBlock.getBoundingClientRect().top;
  
	// Check if the techno-block is in the viewport
	if (technoBlockPosition < window.innerHeight) {
	  // Techno-block is visible, hide the header
	  header.style.display = 'none';
	} else {
	  // Techno-block is not visible, show the header
	  header.style.display = 'flex'; // or whatever the default display property should be
	}
  });

  window.addEventListener('scroll', function() {
	var header = document.querySelector('.header');
	var homeSection = document.querySelector('.home');
	
	// Get the position of the home section relative to the viewport
	var homeSectionPosition = homeSection.getBoundingClientRect().top;
  
	// Check if the home section is above the viewport
	if (homeSectionPosition < 0) {
	  // Home section is above the viewport, add a class to the header to adjust its position
	  header.classList.add('scrolled');
	} else {
	  // Home section is visible in the viewport, remove the class to reset the header position
	  header.classList.remove('scrolled');
	}
  });


//   circle skills

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    const dots = circle.getAttribute("data-dots");
    const percent = circle.getAttribute("data-percent");
    const points = Math.round((percent / 100) * dots * 0.9); // Adjust to 90% of total dots

    let pointsHTML = '';

    for (let i = 0; i < dots; i++) {
        pointsHTML += '<div class="point"></div>';
    }

    circle.querySelector('.points').innerHTML = pointsHTML;

    const progressPoints = circle.querySelectorAll('.point');
    progressPoints.forEach((point, index) => {
        if (index < points) {
            point.classList.add('filled');
        }
    });
});


window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});