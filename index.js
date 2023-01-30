let quizdata=[
    {
question:'Which Frame work belongs to Javascript',
a:'.net',
b:'flask',
c:'react',
d:'django',
correct:'c'
    },
    {
        question:'Which is not a programming language',
a:'html',
b:'Java',
c:'C++',
d:'Python',
correct:'a'

    },
    {
        question:'Which is not a Frame work ',
a:'react',
b:'javascript',
c:'angular',
d:'django',
correct:'b'

    },
    {
        question:' CSS stands for',
a:'cascading style state',
b:'cascading style sheet',
c:'cascading sheet of style',
d:'none',
correct:'b'

    },
]

let quiz=document.getElementById('quiz')
let answer=document.querySelectorAll('.answer')
let question=document.getElementById('question')
let option_a=document.getElementById('a_value')
let option_b=document.getElementById('b_value')
let option_c=document.getElementById('c_value')
let option_d=document.getElementById('d_value')

let submitbtn=document.getElementById('submit')

let currentQuestion=0;
let quizScore=0;

loadQuiz()

function loadQuiz(){

    deselect()
    question.innerHTML=quizdata[currentQuestion].question
    option_a.innerText=quizdata[currentQuestion].a
    option_b.innerText=quizdata[currentQuestion].b
    option_c.innerText=quizdata[currentQuestion].c
    option_d.innerText=quizdata[currentQuestion].d

}

function deselect(){

    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click',()=>{

    let selectedoption;

    answer.forEach(answer=>{

        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })

    if(selectedoption==quizdata[currentQuestion].correct){
        quizScore=quizScore+1
    }
    currentQuestion=currentQuestion+1;

    if(currentQuestion==quizdata.length){

        document.getElementById('quizdiv').innerHTML=`<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`
    }
    else{
        loadQuiz()
    }
})