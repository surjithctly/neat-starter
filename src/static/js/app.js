function setTheme() {
    return {
        colors: ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'],
        //variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        variants: [500],
        currentColor: '',
        iconColor: '',
        isOpen: false,
        initColor() {
            this.currentColor = 'blue-500';
        },
        selectColor(color, variant) {
            this.currentColor = `${color}-${variant}`
        }
    }
}

const flightplan = () => {
    return {
        moduleActive: false,
        moduleList: document.querySelectorAll('.module'),
        toggleModule(moduleId, el) {
            el.classList.add('menu-item-active')
            this.moduleList.forEach((module) => {
                module.classList.add('inactive');
                module.classList.remove('active');
            })
            document.getElementById(moduleId).classList.remove('inactive');
            document.getElementById(moduleId).classList.add('active');
        },
        toggleTheme(choice) {
            // On page load or when changing themes, best to add inline in `head` to avoid FOUC
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }

            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'

            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'

            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
        },
        copy(value, toastIt) {
            this.$clipboard(value);
            if (toastIt) {
                this.toaster(value);
            }
        },
        toaster(value) {
            this.$dispatch('toast', { notification: value })
        }

    }
}