import Column from './Grid/Column'
import Row from './Grid/Row'

const Plugin = {
    install (Vue) {
        /**
         * Makes sure that plugin can be installed only once
         */
        if (this.installed) {
            return
        }
    
        this.installed = true

        Vue.component('column', Column)
        Vue.component('row', Row)
    }
}

export { Column, Row }

export default Plugin