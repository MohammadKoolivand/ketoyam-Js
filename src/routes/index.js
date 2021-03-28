import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/home'
import Mybooks from '../screens/mybooks'
import Explore from '../screens/explore'
import Groups from '../screens/groups'
import Friends from '../screens/friends'
import AboutUs from '../screens/aboutus'
import ContactUs from '../screens/contactus'

export default function index() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mybooks" component={Mybooks} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/friends" component={Friends} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/contactus" component={ContactUs} />
    </Switch>
  )
}
