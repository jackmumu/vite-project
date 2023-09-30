
export const withInstall = (main:any, option:any)=> {
  console.log(main)
  main.install = (app:any)=> {
    for(const comp of [main]){
      if(option?.suffix){
        app.component(option.suffix + comp.name, comp)
        return
      }
      app.component(comp.name, comp)
    }
  }
  return main
}