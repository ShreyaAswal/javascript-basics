//to reduce the global scope pollution, sometimes global func/variables cause hinderence in the local func, thus to avoid that
//we used IIFE(Immidiately Invoked Function Expressions)

//--------syntax-------
//(gives function definition inside and wrap it in parantheses)()

//named IIFE (FUNC HAS A NAME)
(function database(){
    console.log('DB connected')
})(); //this is an IIFE func -in IIFE , when it gets invoked, it doesnt know where to stop, thus a semicolon is must at the end


//simple IIFE (FUNC HAS NO NAME)
((name) =>{
    console.log(`DB connected ${name} `)
})('shreya');