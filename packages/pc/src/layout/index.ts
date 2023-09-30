import { withInstall } from "@lin/utils";

import Header from './Header.vue'
const layouts = [Header]
export default (app:any)=> {
    layouts.forEach(comp=> {
      const item =  withInstall(comp, {suffix: 'sw'})
      app.use(item)
    })
}