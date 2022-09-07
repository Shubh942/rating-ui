console.log("hello")


document.querySelector('.one').addEventListener('click',function(){
    console.log("1")
    document.querySelector('.one').style.backgroundColor="black"
    document.querySelector('.one').style.color="white"
    document.querySelector('.text').innerHTML=`You selected 1 out of 5`
})
document.querySelector('.two').addEventListener('click',function(){
    console.log("2")
    document.querySelector('.two').style.backgroundColor="black"
    document.querySelector('.two').style.color="white"
    document.querySelector('.text').innerHTML=`You selected 2 out of 5`
})
document.querySelector('.three').addEventListener('click',function(){
    console.log("3")
    document.querySelector('.three').style.backgroundColor="black"
    document.querySelector('.three').style.color="white"
    document.querySelector('.text').innerHTML=`You selected 3 out of 5`
})
document.querySelector('.four').addEventListener('click',function(){
    console.log("4")
    document.querySelector('.four').style.backgroundColor="black"
    document.querySelector('.four').style.color="white"
    document.querySelector('.text').innerHTML=`You selected 4 out of 5`
})
document.querySelector('.five').addEventListener('click',function(){
    console.log("5")
    document.querySelector('.five').style.backgroundColor="black"
    document.querySelector('.five').style.color="white"
    document.querySelector('.text').innerHTML=`You selected 5 out of 5`
})
document.querySelector('.click').addEventListener('click',function(){
    document.querySelector('.box2').style.zIndex = "-1";
    document.querySelector('.box3').style.zIndex = "8";
    console.log('submit')
})