
    ext = {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#707070"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#a4a3a3",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    



    particlesJS('particles', ext, function() {
      console.log('callback - particles.js config loaded');
    });

    function navbar_font() {
      if (!$('#navbarTogglerDemo02').is(":hidden")) {
        $('.nav-link').removeClass('nav-link-mobile')
        $('.navbar-brand').removeClass('navbar-brand-mobile')
      } else {
        $('.nav-link').addClass('nav-link-mobile')
        $('.navbar-brand').addClass('navbar-brand-mobile')
      }
    }


    function home() {
      $('#name-row').removeClass('name-row-scroll');
      document.getElementById('name-row').innerHTML = "     <div class='col'></div>    <div class='col-10 col-md-10 col-sm-8 col-lg-4' id='about-sum'>      <p>        <h2 id='about-title-h2'>Different Programming Paradigms of Python Programming Language.</h2> <p> <p> <p> A programming paradigm is an approach to programming a computer based on a coherent set of principles or a mathematical theory. </p>  </p> A program is written to solve problems :  </p> Any realistic program needs to solve different kinds of problems and each kind of problem needs its own paradigm. So we need multiple paradigms and we need to combine them in the same program. </p> </div>    <div class='col'></div>     "

    }

    function aboutme() {
      $('#name-row').removeClass('name-row-scroll');
      document.getElementById('name-row').innerHTML = "     <div class='col'></div>        <div class='col-lg-3 col-md-4 col-sm-6'>            <div class='container' id='name-box'>        <img src='public/img/Avatar.png' id='avatar' class='mx-auto d-block'>        <h2 id='name'>Vedant Agarwal</h2>        <h6 id='name-des'>Registration Number: RA1811028010034 Email Address: va9944@srmist.edu.in</h6>                <h2 class='row' id='icon-row'>          <div class='col'></div>          <div class='col-3'>            <a class='fa fa-linkedin' aria-hidden='true' href='https://www.linkedin.com/in/vedant-agarwal-10650a62'></a>          </div>          <div class='col-3'>            <a class='fa fa-github' aria-hidden='true' href='https://github.com/vedantagarwal4'></a>          </div>                    <div class='col'></div>        </h2>      </div>    </div>    <div class='col'></div>     "
    }

    function moreOnParadigms() { 
      $('#name-row').addClass('name-row-scroll');
      document.getElementById('name-row').innerHTML = ` 
    <div class='col'></div>
    <div class='col-lg-8 col-sm-10 col-md-10 col-12' id='resume'>
      <h2 id='cv-title'><b> More on Paradigms </b></h2>
      
      <hr>

      <div class="row" style='text-align:left'>
        <div class="col-12 col-md-12 col-sm-12 col-lg-6">
        
    <h4 id='cv-subtitle'><b>Structured Paradigm </b></h4>
    <ul>
    
    <li>
      <p id='cv-p'>Program is made as a single structure. Code will execute the instruction by instruction one after the other. It does not support the possibility of jumping from one instruction to some other with the help of any statement like GOTO,etc. The structured program consists of well structured and separated modules. But the entry and exit in a Structured program is a single-time event. It means that the program uses single-entry and single-exit elements. Instructions in this approach will be executed in a serial and structured manner. The languages that support Structured programming approach are: C, C++, Java, C# ..etc The structured program mainly consists of three types of elements, viz. , Selection , Sequence, and Iteration statements.</p>
    </li>
    
    
    
    
    </ul>

    <hr>
    
        
    <h4 id='cv-subtitle'><b>Procedural Paradigm </b></h4>
    <ul>
    
    <li>
      <p id='cv-p'>High level languages such as COBOL, FORTRAN and C, is commonly known as procedure oriented programming(POP). In the procedure oriented programming, program is divided into sub programs or modules and then assembled to form a complete program. These modules are called functions. The problem is viewed as a sequence of things to be done. The primary focus is on functions. Procedure-oriented programming basically consists of writing a list of instructions for the computer to follow and organizing these instructions into groups known as functions.</p>
    </li>
    
    
    </ul>

    <hr>
    
        
    <h4 id='cv-subtitle'><b>Object Oriented Paradigm </b></h4>
    <ul>
    
    <li>
      <p id='cv-p'>OOP treat data as a critical element in the program development and does not allow it to flow freely around the system. It ties data more closely to the functions that operate on it, and protects it from accidental modification from outside.functions. OOP allows decomposition of a problem into a number of entities called objects and then build data functions around these objects. The data of an object can be accessed only by the functions associated with that object. Functions of one object can access the functions of another objects.</p>
    </li>
    
    
    </ul>

    <hr>
    
        
    <h4 id='cv-subtitle'><b>Event Driven Paradigm </b></h4>
    <ul>
    
    <li>
      <p id='cv-p'>Event-driven programming is a programming paradigm in which the flow of program execution is determined by events - for example a user action such as a mouse click, key press, or a message from the operating system or another program. An event-driven application is designed to detect events as they occur, and then deal with them using an appropriate event-handling procedure. In a typical modern event-driven program, there is no discernible flow of control. The main routine is an event-loop that waits for an event to occur, and then invokes the appropriate event-handling routine. Event callback is a function that is invoked when something significant happens like when click event is performed by user or the result of database query is available.</p>
    </li>
    
    
    </ul>

    <hr>
    
        
    <h4 id='cv-subtitle'><b>Declarative Paradigm </b></h4>
    <ul>
    
    <li>
      <p id='cv-p'>Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow. This paradigm often considers programs as theories of a formal logic, and computations as deductions in that logic space. Declarative programming is often defined as any style of programming that is not imperative. Common declarative languages include those of database query languages (SQL), logic programming, functional programming, etc. A program that describes what computation should be performed and not how to compute it. Non-imperative, non-procedural. Any programming language that lacks side effects (example: a function might modify a global variable or static variable, modify one of its arguments, raise an exception). A language with a clear correspondence to mathematical logic.</p>
    </li>
    
    
    </ul>
    <hr>
    
        
    <h4 id='cv-subtitle'><b>Imperative Paradigm </b></h4>
    <ul>
    
    <li>
      <p id='cv-p'>It is a programming paradigm that describes computation as statements that change a program state. Computations are performed through a guided sequence of steps, in which these variables are referred to or changed. The order of the steps is crucial, because a given step will have different consequences depending on the current values of variables when the step is executed. Imperative programs define sequences of commands/statements for the computer that change a program state (i.e., set of variables)</p>
    </li>
    
    
    </ul>

    <hr>
    
        
    <h4 id='cv-subtitle'><b>Parallel Paradigm </b></h4>
    <ul>
    
    <li>
      <p id='cv-p'>A system is said to be parallel if it can support two or more actions executing simultaneously i.e., multiple actions aresimultaneously executed in parallel systems. Explicit Parallelism is characterized by the presence of explicit constructs in the programming language, aimed at describing (to a certain degree of detail) the way in which the parallel computation will take place. Whereas Implicit Parallelism allows programmers to write their programs without any concern about the exploitation of parallelism.</p>
    </li>
    
    
    </ul>
    

    <hr>
    
        </div>
        <div class="col-12 col-md-12 col-sm-12 col-lg-6">
        
        <h4 id='cv-subtitle'><b>Concurrent Paradigm </b></h4>
        <ul>
        
        <li>
          <p id='cv-p'>Computing systems model the world, and the world contains actors that execute independently of, but communicate with each other. In modelling the world, many (possibly) parallel executions have to be composed and coordinated, and that's where the study of concurrency comes in. In the shared memory model of concurrency, concurrent modules interact by reading and writing shared objects in memory. In the message-passing model, concurrent modules interact by sending messages to each other through a communication channel. Modules send off messages, and incoming messages to each module are queued up for handling.</p>
        </li>
        
        
        </ul>
        <hr>
    
        
        <h4 id='cv-subtitle'><b>Functional Paradigm </b></h4>
        <ul>
        
        <li>
          <p id='cv-p'>Functional programming is a programming paradigm in which it is tried to bind each and everything in pure mathematical functions. It is a declarative type of programming style that focuses on what to solve rather than how to solve. Functional programming paradigm is based on lambda calculus. Instead of statements, functional programming makes use of expressions. Unlike a statement, which is executed to assign variables, evaluation of an expression produces a value. Functional programming is a declarative paradigm because it relies on expressions and declarations rather than statements.Unlike procedures that depend on a local or global state, value outputs in FP depend only on the arguments passed to thefunction. Functional programming consists only of PURE functions. In functional programming, control flow is expressed by combining function calls, rather than by assigning values to variables.</p>
        </li>
        
        
        </ul>

        <hr>
    
        
        <h4 id='cv-subtitle'><b>Logic Paradigm </b></h4>
        <ul>
        
        <li>
          <p id='cv-p'>It can be an abstract model of computation. Solve logical problems like puzzles, series . Have knowledge base which we know before and along with the question you specify knowledge and how that knowledge is to be applied through a series of rules. The Logical Paradigm takes a declarative approach to problem-solving. Various logical assertions about a situation are made, establishing all known facts. Then queries are made.</p>
        </li>
        
        
        </ul>
        <hr>
    
        
        <h4 id='cv-subtitle'><b>Dependent Paradigm </b></h4>
        <ul>
        
        <li>
          <p id='cv-p'>Writing a correct computer program is hard and proving that a program is correct is even harder. Dependent Types allow us to write programs and know they are correct before running them. Dependent types: you can specify types that can check the value of your variables at compile time. A function has dependent type if the type of a function's result depends on the VALUE of its argument; this is not the same thing as a ParameterizedType. The second order lambda calculus possesses functions with dependent types.</p>
        </li>
        
        
        </ul>

        <hr>
    
        
        <h4 id='cv-subtitle'><b>Network Paradigm </b></h4>
        <ul>
        
        <li>
          <p id='cv-p'>The Network paradigm involves thinking of computing in terms of a client, who is essentially in need of some type of information, and a server, who has lots of information and is just waiting to hand it out. Typically, a client will connect to a server and query for certain information. The server will go off and find the information and then return it to the client. Network programming uses a particular type of network communication known as sockets. A socket is a software abstraction for an input or output medium of communication.</p>
        </li>
        
        
        </ul>

        <hr>
    
        
        <h4 id='cv-subtitle'><b>Symbolic Paradigm </b></h4>
        <ul>
        
        <li>
          <p id='cv-p'>Symbolic computation deals with the computation of mathematical objects symbolically. This means that the mathematical objects are represented exactly, not approximately, and mathematical expressions with unevaluated variables are left in symbolic form.</p>
        </li>
        
        
        </ul>

        <hr>
    
        
        <h4 id='cv-subtitle'><b>Automata Paradigm </b></h4>
        <ul>
        
        <li>
          <p id='cv-p'>Automata-based programming is a programming paradigm in which the program or its part is thought of as a model of a finite state machine or any other formal automation. Automata theory is the study of abstract computational devices.Abstract devices are (simplified) models of real computations. Computations happen everywhere: On your laptop, on your cell phone, in nature, etc.</p>
        </li>
        
        
        </ul>

        <hr>
    
        
        <h4 id='cv-subtitle'><b>Graphical Paradigm </b></h4>
        <ul>
        
        <li>
          <p id='cv-p'>A major task that a GUI designer needs to do is to determine what will happen when a GUI is invoked. Every GUI component may generate different kinds of “events” when a user makes access to it using his mouse or keyboard. E.g. if a user moves his mouse on top of a button, an event of that button will be generated to the Windows system. E.g. if the user further clicks, then another event of that button will be generated (actually it is the click event). For any event generated, the system will first check if there is an event handler, which defines the action for that event. For a GUI designer, he needs to develop the event handler to determine the action that he wants Windows to take for that event.</p>
        </li>
        
        
        </ul>
    <hr>
    
        </div>
      </div>

    </div>
    <div class='col'></div>
     `
    }


    function startup() {
      navbar_font();
      home();
    }

    window.onload = startup();

    $(document).ready(function () {
      $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
      });
    })
    