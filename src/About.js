export default function About() {
    
    return (
        <div style={{padding:'60px'}} >
            <p> <b>Description:</b> <em>This app generate a 30sec TOTP token </em></p>


            <p><b>Security:</b> <em>Security key provided by the user 
                the key is stored at backend (firebase firestore)security key is never transported to client side(frontEnd) token are generated in cloud 
                       function which are only communicated back to client if request carry the corresponding UUID, </em></p>

            <p><b>Technologies:</b> HTML CSS React Material-UI Firebase(Auth,Firetore and Cloud functions)</p>

            <p><b>Author: </b>Umar Adamu Jere</p> 
            <a href="https://twitter.com/0mar_jay">Twitter</a> <br />
            <a href="https://github.com/DDLD93">Github</a>       
           
        </div>
    )
}