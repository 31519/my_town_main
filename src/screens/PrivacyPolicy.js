import React from "react";
import Footers from "../components/Footers";
import Banners from "../components/Banners";
import { useNavigate, Link } from "react-router-dom";
import Header from "../screen/Header";
import SideBar from "../components/SideBar";

// IMPORT FROM ACTIONS


import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  gridContent: {
    justifyContent: "center",
    alignItem: "center",
    display: "flex",
    paddingBottom: "20px",
    backgrounColor: "white",
    overflowWrap: "break-word",
  },
  title: {
    fontSize: "16px",
  },
  gridHeader: {
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "white",
    color: "green",
  },
  date: {
    opacity: 0.6,
    fontSize: "14px",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
  },
  header: {
    fontSize: "20px",
  },
  text: {
    fontFamily: "Helvetica",
    wordBreak: "break-word",
    margin: "10px",
    letterSpacing: "1.5px"
    
  }
});

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  console.log(navigate, 'navigate')
  // console.log(navigate, 'navigate')

  // const pathname = window.location.pathname

  const classes = useStyles();

  const navigateHandler = () => {
    navigate(-1)
  }




  return (
    <>
    <SideBar />
      <Header />
      <div id="content">


        <Grid className={classes.gridHeader} container item>
            <Button onClick={navigateHandler} color='info' variant='contained'>Back</Button>
        </Grid>

        <Grid spacing={2} className={classes.gridContent} container>
          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
          </Grid>

          <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
            
            <Grid style={{margin: '10px'}} item>

            <p className={classes.text}>
              At inmatown, accessible from www.inmatown.com, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by inmatown and how we use it.
            </p>

            <p className={classes.text}>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p className={classes.text}>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in inmatown. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>

            <h2 className={classes.text}>Consent</h2>

            <p className={classes.text}>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <h2 className={classes.text}>Information we collect</h2>

            <p className={classes.text}>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p className={classes.text}>
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p className={classes.text}>
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>

            <h2 className={classes.text}>How we use your information</h2>

            <p className={classes.text}>
              We use the information we collect in various ways, including to:
            </p>

            <ul className={classes.text}>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className={classes.text}>Log Files</h2>

            <p className={classes.text}>
              inmatown follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            <h2 className={classes.text}>Our Advertising Partners</h2>

            <p className={classes.text}>
              Some of advertisers on our site may use cookies and web beacons.
              Our advertising partners are listed below. Each of our advertising
              partners has their own Privacy Policy for their policies on user
              data. For easier access, we hyperlinked to their Privacy Policies
              below.
            </p>

            <ul>
              <li>
                <p className={classes.text}>Google</p>
                <p className={classes.text}>
                  <a href="https://policies.google.com/technologies/ads">
                    https://policies.google.com/technologies/ads
                  </a>
                </p>
              </li>
            </ul>

            <h2 className={classes.text}>Advertising Partners Privacy Policies</h2>

            <p className={classes.text}>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of inmatown.
            </p>

            <p className={classes.text}>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on inmatown, which
              are sent directly to users' browser. They automatically receive
              your IP address when this occurs. These technologies are used to
              measure the effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on websites that
              you visit.
            </p>

            <p className={classes.text}>
              Note that inmatown has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>

            <h2 className={classes.text}>Third Party Privacy Policies</h2>

            <p className={classes.text}>
              inmatown's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.{" "}
            </p>

            <p className={classes.text}>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>

            <h2 className={classes.text}>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

            <p className={classes.text}>
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p className={classes.text}>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </p>
            <p className={classes.text}>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p className={classes.text}>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </p>
            <p className={classes.text}>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2 className={classes.text}>GDPR Data Protection Rights</h2>

            <p className={classes.text}>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p className={classes.text}>
              The right to access ??? You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p className={classes.text}>
              The right to rectification ??? You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p className={classes.text}>
              The right to erasure ??? You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p className={classes.text}>
              The right to restrict processing ??? You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p className={classes.text}>
              The right to object to processing ??? You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p className={classes.text}>
              The right to data portability ??? You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p className={classes.text}>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h2 className={classes.text}>Children's Information</h2>

            <p className={classes.text}>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p className={classes.text}>
              inmatown does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
            </Grid>
          </Grid>

          <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
            
          </Grid>
        </Grid>
        <Footers/>
      </div>
    </>
  );
};

export default PrivacyPolicy;
