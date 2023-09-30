
export const withInstall = (main:any)=> {
  console.log(main)
  main.install = (app:any)=> {
    for(const comp of [main]){
      app.component(comp.name, comp)
    }
  }
  return main
}