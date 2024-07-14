document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null,
        rootMargin: "-20% 0px -80%",
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        let maxRatio = 0;
        let activeEntry = null;

        entries.forEach(entry => {
            if (entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                activeEntry = entry;
            }
        });

        if (activeEntry) {
            document.querySelectorAll('.active-link').forEach(link => {
                link.classList.remove('active-link');
            });

            const link = document.querySelector(`a[href="#${activeEntry.target.id}"]`);
            if (link) {
                link.classList.add('active-link');
            }
        }
    }, options);

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
});
