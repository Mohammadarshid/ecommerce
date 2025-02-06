
const testusercontroller = (req, res) => {
    

    try {
        res.status(200).send("<h1> TEST User Data Api</h1>")
        
    } catch (error) {
        console.log( 'error in test API', error );
        
        
    }
 }

module.exports= {testusercontroller}