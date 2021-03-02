import svgCaptcha from 'svg-captcha'
import send from '../config/mailConfig'
class PublicController{
    constructor(){}
    async getCaptcha(ctx){
        console.log(ctx.query,'body')
        const newCaptcha = svgCaptcha.create({
            size:4,
            ignoreChars:'0o1il',
            color:true,
            noise:Math.floor(Math.random()*5),
            width:150,
            height:50
        })
        console.log(newCaptcha)
        ctx.body = {
            code:200,
            data:newCaptcha.data
        }
    }
    async register(ctx){
        ctx.body = {
            code:200,
            data:true
        }
    }
    async login(ctx){
        console.log(ctx.request.body,'body')
        ctx.body = ctx.request.body
    }
    async sendEmail(ctx){
        const {body} = ctx.request
        console.log(body,'body')
 
        try{
            let result = await send({
                userName:'asdf',
                code:'234523',
                email:'18535150226@163.com'
            })
            ctx.body = {
                code:200,
                result,
                mst:'发送成功'
            }
        }
        catch(e){
            console.log(e,'error')
        }
    }
}

export default new PublicController()