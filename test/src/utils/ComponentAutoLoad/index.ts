import {type App} from 'vue';
const questions:Record<string,any> = import.meta.glob('../../components/*.vue',{eager:true});
const InlineBlank:Record<string,any> = import.meta.glob('../../components/*.ts',{eager:true});


export default function setupPlugin(app:App){
    Object.entries(questions).forEach(([path,component])=>{
        const componentName = path.split('/').pop()?.split('.')[0]!;
        app.component(componentName,component.default)
    });
    Object.entries(InlineBlank).forEach(([path,component])=>{
        const componentName = path.split('/').pop()?.split('.')[0]!;
        app.component(componentName,component.default)
    })
};
