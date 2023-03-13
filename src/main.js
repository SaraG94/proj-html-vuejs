import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPhone,faAngleDown)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
