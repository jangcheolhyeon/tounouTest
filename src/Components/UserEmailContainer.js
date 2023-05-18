const UserEmailContainer = () => {

    return(
        <>
            <div className="user_email_container">
                <span className="first_text">Hear it first</span>
                <span className="second_text for_desktop">Get updates on product dorps, collaborations and all things Beats.</span>
                
                <span className="second_text for_mobile">Get updates on product dorps,</span>
                <span className="second_text for_mobile">collaborations and all things Beats.</span>
                
                <div className="user_email_form_container">
                    <form className="user_email_form">
                        <input type="text" placeholder="Enter your email" className="user_email"/>
                        <button className="email_sign_btn">SIGN UP</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UserEmailContainer;