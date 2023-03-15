import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faChartSimple} from '@fortawesome/free-solid-svg-icons'
import { faRankingStar} from '@fortawesome/free-solid-svg-icons'
import { faChartPie} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass,faSquarePlus,faArrowUpWideShort} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faTwitter,faYoutube,faInstagram,faTiktok,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faCopyright} from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faPhone,faAngleDown,faArrowRight,faChartSimple,faRankingStar,faChartPie,faMagnifyingGlass,faSquarePlus,faArrowUpWideShort,faFacebook,faTwitter,faYoutube,faInstagram,faTiktok,faLinkedin,faCopyright)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
