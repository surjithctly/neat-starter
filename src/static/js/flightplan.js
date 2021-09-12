function flightplan() {
  return {

    Global: {

      NavigationPanel: {
        isVisible: false,
        displayPanel: function () {
          this.isVisible = true
        },
        hidePanel: function () {
          this.isVisible = false
        },
      },

      ToastNotification: function () {
        return {
          message: '',
          isVisible: false,
          icon: null,
          displayContainer: function (content) {
            this.content = content || ''
            this.isVisible = true
            setTimeout(() => {
              this.hideContainer()
            }, 1500)
          },
          hideContainer: function () {
            this.isVisible = false
          },
        }
      },

      Clipboard: function () {
        return {
          content: '',
          toastContent: null,
          setContent: function (content, func, toastContent) {
            func(content);
          },
        }
      }
    }
  }
}


// function NavigationPanel() {
//   return {
//     isVisible: false,
//     displayPanel: function () {
//       this.isVisible = true
//     },
//     hidePanel: function () {
//       this.isVisible = false
//     },
//   }
// }

// function ToastNotification(content) {
//   return {
//     message: '',
//     isVisible: false,
//     icon: null,
//     displayContainer: function () {
//       this.content = content || ''
//       this.isVisible = true
//       setTimeout(() => {
//         this.hideContainer()
//       }, 1500)
//     },
//     hideContainer: function () {
//       this.isVisible = false
//     },
//   }
// }

// function Clipboard() {
//   return {
//     content: '',
//     toastContent: null,
//     setContent: function (content, func, toastContent) {
//       func(content);
//       if (toastContent != null) {
//         ToastNotification(toastContent).displayContainer()
//       }
//     },
//   }
// }

  // color: {
  //     copy: function (value) {
  //         this.$refs.$el.$clipboard(value);
  //     }
  // },
