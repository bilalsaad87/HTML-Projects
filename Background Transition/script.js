const numSegments = 5;
const pageHeight = document.documentElement.scrollHeight;
const pageWidth = document.documentElement.scrollWidth;
const segmentHeight = pageHeight / numSegments;

for (let i = 0; i < numSegments; i++) {
    const rondomColor = random_rgba();
    const segment1 = document.createElement('div');
    segment1.style.height = segmentHeight + 'px';
    segment1.style.width = '100%';
    segment1.style.position = 'absolute';
    segment1.style.left = 0;
    segment1.style.top = (i * segmentHeight) + 'px';
    segment1.style.backgroundColor = rondomColor;
    document.body.appendChild(segment1);

    const segment2 = document.createElement('div');
    segment2.style.height = segmentHeight + 'px';
    segment2.style.width = '100%';
    segment2.style.position = 'absolute';
    segment2.style.left = 0;
    segment2.style.top = (i * segmentHeight) + 'px';
    segment2.style.backgroundColor = rondomColor;
    document.body.appendChild(segment2);

    const content = document.getElementById('container');

    // set Motion with GSAP
    gsap.to(segment1, { duration: random_duration(), x: -pageWidth, delay: 2 });
    gsap.fromTo(segment2, { x: 0 }, { x: pageWidth, duration: random_duration() });
    gsap.fromTo(content, { opacity: 0 }, { opacity: 1, duration: random_duration(), delay: 4});
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function random_duration() {
    var o = Math.round, r = Math.random, s = 5;
    return o(r() * s);
}



