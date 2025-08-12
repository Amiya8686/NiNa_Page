import {reactive,ref} from "./vue.esm-browser.js"
const contentModule={
    setup(){
        let control = reactive({
            isShowMenus:false
        });
        let content = reactive({
            name:"井芹仁菜",
            university:"有刺无刺",
            avatar:"./sources/images/NiNa.png",
            location:"日本·新川崎"
        })
        let content_en = reactive({
            name:"NiNa ISeRi",
            university:"TEGENASHI-TOGEARI",
            avatar:"./sources/images/NiNa.png",
            location:"New Kawasaki"
        })
        

        const handleMenus=()=>{
            control.isShowMenus=!control.isShowMenus;
        }

        return {control,content,content_en,handleMenus};
    }
}
export {contentModule} ;