var h1 = document.createElement("h1");
document.body.append(h1)


setTimeout(()=>{
    document.querySelector("h1").innerHTML = `COUNT DOWN: ${10}`
    setTimeout(()=>{
        document.querySelector("h1").innerHTML = `COUNT DOWN: ${9}`
        setTimeout(()=>{
            document.querySelector("h1").innerHTML = `COUNT DOWN: ${8}`
            setTimeout(()=>{
                document.querySelector("h1").innerHTML = `COUNT DOWN: ${7}`
                setTimeout(()=>{
                    document.querySelector("h1").innerHTML = `COUNT DOWN: ${6}`
                    setTimeout(()=>{
                        document.querySelector("h1").innerHTML = `COUNT DOWN: ${5}`
                        setTimeout(()=>{
                            document.querySelector("h1").innerHTML = `COUNT DOWN: ${4}`
                            setTimeout(()=>{
                                document.querySelector("h1").innerHTML = `COUNT DOWN: ${3}`
                                setTimeout(()=>{
                                    document.querySelector("h1").innerHTML = `COUNT DOWN: ${2}`
                                    setTimeout(()=>{
                                        document.querySelector("h1").innerHTML = `COUNT DOWN: ${1}`
                                        setTimeout(()=>{
                                            document.querySelector("h1").innerHTML = ` ${"HAPPY INDEPENDENCE DAY"}`
                                        },1000)
                                        
                                    },1000)
                                    
                                },1000)
                                
                            },1000)
                            
                        },1000)
                        
                    },1000)
                    
                },1000)
                
            },1000)

        },1000)
    },1000)
},1000)