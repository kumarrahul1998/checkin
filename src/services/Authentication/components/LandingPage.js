import React from 'react'
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"

import BoxInput from "../../../shared/components/TextInput/BoxInput"
import Button from "../../../shared/components/Button/Basic"
import { _set_state } from '../middleware'

import WhiteLogo from "../../../assets/authentication/logo_white.png"
import MobileApp from "../../../assets/authentication/mobile_app.png"
import  '../../../stylings/firstpage.css'

function LandingPage(props) {
  const { setState } = props
  const openApp = () => {
    window.location.href = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.checkin.app.checkin";
  }
  const handleSkip = () => {
    setState({
      showLandingPage: false,
      askingProfileDetails: false,
      askingContact: true,
      askingOTP: false
    })
  }
  document.body.style.backgroundColor = "#ff5656";
  
  const mobileImageStyle = {
    position: 'fixed',
    bottom: '-1vh',
    left: '20vw',
    minWidth: '60vw',
    maxWidth: '60vw'
  }

  return (
    <div className="h-100 text-light" >
      <div>
        <br />
        <br />

        <Grid container >
          <Grid item xs={1} ></Grid>
          <Grid item xs={10} >
            <img
              style={{ height: '35px', width: '150px' }}
              src={WhiteLogo}
              width={200}
              id="white-logo"
            />
            <br />
            <br />
            <div style={{ fontWeight: 500, fontSize: 25 }} id="tag-line" >Experience is everything</div>
            <br />
            <div className="fw-400 fs-25" style={{ lineHeight: "18px" }}>
              Checkin is the only thing you need while eating
              out at Restaurant or staying in Hotel.
              Ordering, service, payments all at one place.
            </div>
            <br />
            <Grid spacing={1} container >
              <Grid item sm={6} xs={12} >
                <Button
                  fullWidth
                  onClick={openApp}
                  id="android"
                >
                  Download for Android
                </Button>
              </Grid>
              <Grid item sm={6} xs={12} >
                <Button
                  fullWidth
                  onClick={handleSkip}
                  id="skip"
                >
                  Skip
                </Button>
              </Grid>
            </Grid>
            <br />
            <div style={mobileImageStyle} className="text-center" id="mobile-image-container" >
              <img
                src={MobileApp}
                id="mobile-image"
              />
            </div>

            <br />

          </Grid>
          <Grid item xs={1} ></Grid>
        </Grid>
        <br />
      </div>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication.signup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (obj) => dispatch(_set_state(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)