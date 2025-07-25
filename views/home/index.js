<script>
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('.navbar ul');
    navToggle.addEventListener('click', () => {
        navUl.classList.toggle('open');
    });
</script>