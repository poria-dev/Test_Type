const timer = document.getElementById("timer")
const progress = document.getElementById("progress")
const inp = document.getElementById("inp")
const para = document.querySelector("#para")
const statuss = document.getElementById("status")
const reset = document.getElementById("reset")

const soundstart = new Audio("sound/clock_tiktok_3.mp3")
const soundend = new Audio("sound/Bomb_Timer.mp3")

const modal = document.getElementById("modal")
const again = document.getElementById("again")
const result = document.getElementById("result")


let number = 30
let stro = 0
let x;
let y;
let flag = 0
let val;
let val2;


inp.addEventListener("keydown", () => {


    flag++

    if (flag == 1) {

        if (number == 30) {


            x = setInterval(() => {


                timer.innerHTML = number

                number--



                if (number >= 15) {

                    soundstart.play()
                    soundstart.currentTime = 0

                } 

                else if (number <= 15) {

                    soundstart.pause()

                }




                if (number <= 14) {


                    soundend.play()
                    soundend.currentTime = 0


                } 



                if (number <= 0) {


                    soundend.pause()


                }




                if (stro == 0) {


                    y = setInterval(() => {


                        stro++

                        progress.style.strokeDashoffset = `${stro}`



                        if (stro == 490) {


                            clearInterval(y)


                        }


                    },61)



                }





                if (number == -1) {


                    alert("time finish ....")

                    clearInterval(x)

                    location.reload()


                }



            },1000)



        }


    }



    borderbox()



})







function borderbox(e){


    setTimeout(()=>{


        val = inp.value.trim()

        val2 = para.textContent.trim()



        let og = val2.substring(0,val.length)





        if(val == og){


            inp.classList.remove("border-sky-500")

            inp.classList.remove("border-red-500")

            inp.classList.remove("border-green-500")

            inp.classList.add("border-yellow-400")



            statuss.innerHTML="Good! keep going..."



            statuss.classList.remove("text-red-700")

            statuss.classList.add("text-yellow-700")



        }



        else{


            inp.classList.remove("border-yellow-400")

            inp.classList.remove("border-sky-500")

            inp.classList.remove("border-green-500")

            inp.classList.add("border-red-500")



            statuss.innerHTML="Oops! Try again..."



            statuss.classList.remove("text-yellow-700")

            statuss.classList.add("text-red-700")



        }







        if(val == val2){



            inp.classList.remove("border-yellow-400")

            inp.classList.remove("border-sky-500")

            inp.classList.remove("border-red-500")


            inp.classList.add("border-green-500")




            statuss.classList.remove("text-yellow-700")


            statuss.classList.add("text-green-700")



            statuss.innerHTML="Great! you did it..."




            clearInterval(x)

            clearInterval(y)



            soundend.pause()

            soundstart.pause()





            setTimeout(()=>{


                modal.classList.remove("hidden")


                result.innerHTML="Great! You finished the typing test successfully 🎉"



            },500)





        }




    },200)



}








reset.addEventListener("click",()=>{


    soundend.pause()

    soundstart.pause()



    if(confirm("RESET🔴 are u sure !")){


        clearInterval(x)

        clearInterval(y)



        setTimeout(()=>{


            location.reload()



        },700)



    }



})







again.addEventListener("click",()=>{


    soundend.pause()

    soundstart.pause()



    location.reload()



})  
