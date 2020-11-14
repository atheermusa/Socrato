import React from 'react'
import { LoginForm, NavbarUnauth, RegisterForm, LandingPage, HowItWorks } from "../Components"
import { Switch, Route } from "react-router-dom";
import "../Style/LandingPageContainer.css"

export default function LandingPageContainer() {
    return (
        <div>
            <NavbarUnauth></NavbarUnauth>
            <div>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/HowItWorks" component={HowItWorks} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/register" component={RegisterForm} />
                </Switch>
            </div>
        </div>
    )
}
