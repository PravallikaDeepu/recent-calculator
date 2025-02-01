const button = document.querySelectorAll("button")
const myH1 = document.getElementById("h1")
const operator = document.querySelectorAll("operators")
const equalBtn = document.getElementById("equal")


let evaluated = false

function addDecimal()
{
    if(!myH1.innerText.includes("."))
    {
        myH1.innerText = myH1.innerText + "."
    }
    else 
    {
        myH1.innerText = myH1.innerText + "."
    }
}


function getData(data)
{
   if(evaluated)
   {
    myH1.innerText = data
    evaluated = false
   }
    else if(myH1.innerText === "0")
    {
        myH1.innerText = data
    }

    else
    {
        myH1.innerText = myH1.innerText + data
    }
}
button.forEach(btn => {
   if(btn.classList.length === 0)
    {

        btn.addEventListener("click",function()
    {
        getData(btn.innerText)
        
    })
    }

    else if (btn.classList.contains("operators"))
    {
        btn.addEventListener("click", function()
    {
        getData(btn.innerText)
    })
    }

    else if (btn.classList.contains("decimal"))
    {
        btn.addEventListener("click", function()
    {
        addDecimal()
    })
    }
   
  });


//Deleting the data

const allClear = document.getElementById("allclear")
allClear.addEventListener("click", function()
{
    myH1.innerText = "0";
})

//clearing the data

const clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", function()
{
    myH1.innerText = myH1.innerText.slice(0,-1)
    if(myH1.innerText.length == 0)
    {
       myH1.innerText = "0"
    }
})

// Evaluating the Data
   equalBtn.addEventListener("click", function()
    {
        previousData= eval(myH1.innerText)
        myH1.innerText = previousData
        
            evaluated = true;
    })



function key()
{
    document.addEventListener("keydown", function(event)
{
    // console.log(event.key)
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.key)) {
        getData(event.key)
        event.preventDefault()
    }

    else if(event.key === "Enter")
    {
        event.preventDefault()
        equalBtn.click()
    }

    else if(["+", "-", "/", "*", "(", ")"]. includes(event.key))
    {
        event.preventDefault()
        getData(event.key)
    }
    else if (event.key === "Backspace")
    {
        event.preventDefault()
        clearBtn.click()
    }
    else if (event.key == ".")
    {
        event.preventDefault()
        addDecimal()
    }
    else if (event.key === "Escape")
    {
        event.preventDefault()
        allClear.click()
    }
    
})
}

key()