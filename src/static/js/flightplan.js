function flightplan() {
    return {
        global: {
            panelnav: {
                open: false,
                showPanelNav: function () {
                    this.open = true
                },
                hidePanelNav: function () {
                    this.open = false
                },
            },

            toaster: {
                message: '',
                visible: false,
                icon: null,
                showToast: function (message) {
                    this.message = message || ''
                    this.visible = true
                    setTimeout( ()=>{
                        this.hideToast()
                    }, 1500)
                },
                hideToast: function () {
                    this.visible = false
                },

            },
        },
        // color: {
        //     copy: function (value) {
        //         this.$refs.$el.$clipboard(value);
        //     }
        // },
    }
}
