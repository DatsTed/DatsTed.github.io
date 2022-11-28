
const router = new Navigo('/');

router.on('/', function() {
  document.getElementById("main").innerHTML = Home
});

router.on('/Info', function() {
  document.getElementById("main").innerHTML = Info
});

router.on('/Contact', function() {
  document.getElementById("main").innerHTML = Contact
});

router.on('/Formations', function() {
  document.getElementById("main").innerHTML = Formations
})

router.resolve();
