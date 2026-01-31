export const fadeIn =({direction,delay}:
    {
        direction:string;
        delay:number
    })=>{
    return{
        hidden:{
            y: direction==='up'?80:direction==='down'?-80 :0,
            opacity:0,
            x:direction==='left'?40:direction==='right'?-40 :0,
            transition:{
                type:'tween' as const,
                duration:2,
                delay:delay,
                ease:[0.25,0.6,0.3,0.8] as [number, number, number, number]
            }
        },
        start:{
            y: direction==='up'?40:direction==='down'?-80 :0,
            opacity:1,
            x:direction==='left'?80:direction==='right'?-80 :0,
            transition:{
                type:'tween' as const,
                duration:0,
                delay:delay,
                ease:[0.25,0.6,0.3,0.8] as [number, number, number, number]
            }
        },

        show:{
            y: 0,
            x:0,
            opacity:1,
            transition:{
                type:'tween' as const,
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75] as [number, number, number, number]
            }
        }

    }
}
export const fadeInMenu =({direction,delay}:
    {
        direction:string;
        delay:number
    })=>{
    return{
        hidden:{
            y: direction==='up'?40:direction==='down'?-80 :0,
            opacity:0.9,
            x:direction==='left'?40:direction==='right'?-200 :0,
            transition:{
                type:'tween' as const,
                duration:1,
                delay:delay,
                ease:[0.25,0.6,0.3,0.8] as [number, number, number, number]
            }
        },
        start:{
            y: direction==='up'?40:direction==='down'?-80 :0,
            opacity:1,
            x:direction==='left'?80:direction==='right'?-80 :0,
            transition:{
                type:'tween' as const,
                duration:0,
                delay:delay,
                ease:[0.25,0.6,0.3,0.8] as [number, number, number, number]
            }
        },

        show:{
            y: 0,
            x:0,
            opacity:1,
            transition:{
                type:'tween' as const,
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75] as [number, number, number, number]
            }
        }

    }
}